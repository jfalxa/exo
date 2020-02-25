const FS = require('fs')
const Parcel = require('@parcel/core').default
const EXERCISES = require('./exercises')

// find first exercise that's not done
function next(exercises) {
  for (let i = 0; i < exercises.length; i++) {
    const file = FS.readFileSync(exercises[i].path, 'utf8')

    if (file.includes('// I AM NOT DONE')) {
      return exercises[i]
    }
  }
}

// update the current html to point at the wanted exercise
function select(exercise) {
  FS.readFile('src/index.html', 'utf8', (err, html) => {
    if (err) throw err

    const nextHTML = html
      .replace(/<title>.*<\/title>/, `<title>${exercise.name}</title>`)
      .replace(/import\(.*\)/, `import('../${exercise.path}')`)

    FS.writeFile('src/index.html', nextHTML, err => {
      if (err) throw err
    })
  })
}

function run(filter) {
  const exercises = filter
    ? EXERCISES.filter(ex => ex.name.includes(filter))
    : EXERCISES

  const parcel = new Parcel({
    entries: 'src/index.html',
    serve: { host: 'localhost', port: 1234 },
    hot: true,
    disableCache: true,
    patchConsole: true
  })

  let target = next(exercises)
  target && select(target)

  if (!target) {
    return console.log('Congratulations, all exercises were completed')
  }

  parcel.watch(() => {
    if (!target) return

    const file = FS.readFileSync(target.path, 'utf8')

    if (!file.includes('// I AM NOT DONE')) {
      target = next(exercises)
      target && select(target)
    }
  })
}

if (process.argv.length === 2) {
  run()
} else if (process.argv[2] === 'hint') {
  const exercise = EXERCISES.find(ex => ex.name === process.argv[3])
  console.log((exercise && exercise.hint) || 'No hint for this exercise')
} else if (process.argv.length === 3) {
  run(process.argv[2])
}
