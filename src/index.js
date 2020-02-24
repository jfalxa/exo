const FS = require('fs')
const Parcel = require('@parcel/core').default
const EXERCISES = require('./exercises')

// find first exercise that's not done
function next() {
  for (let i = 0; i < EXERCISES.length; i++) {
    const file = FS.readFileSync(EXERCISES[i].path, 'utf8')

    if (file.includes('// I AM NOT DONE')) {
      return EXERCISES[i]
    }
  }
}

// update the current html to point at the wanted exercise
function select(exercise) {
  FS.readFile('src/index.html', 'utf8', (err, html) => {
    if (err) throw err

    const withExercise = html.replace(
      /import\(.*\)/,
      `import('../${exercise.path}')`
    )

    FS.writeFile('src/index.html', withExercise, err => {
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
  select(target)

  parcel.watch(() => {
    if (!target) return

    const file = FS.readFileSync(target.path, 'utf8')

    if (!filter && !file.includes('// I AM NOT DONE')) {
      target = next(exercises)
      target && select(target)
    }
  })
}

if (process.argv.length === 2 || process.argv[2] === 'watch') {
  run()
} else if (process.argv[2] === 'hint') {
  const exercise = EXERCISES.find(ex => ex.name.includes(process.argv[3]))
  console.log((exercise && exercise.hint) || 'No hint for this exercise')
} else if (process.argv.length === 3) {
  run(process.argv[2])
}
