// I AM NOT DONE

// creates the markup for a div and places 'content' inside it
function div(content) {
  return `<div>${content}</div>`
}

// creates the markup for a span and places 'content' inside it
function span // ...

export default function main() {
  const html = div(`${span('hello')} ${span('world')}`)

  console.log(html)

  assert(
    html === '<div><span>hello</span> <span>world</span></div>',
    'The result should be "<div><span>hello</span> <span>world</span></div>"'
  )
}
