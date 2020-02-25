// I AM NOT DONE

function div(content) {
  return `<div>${content}</div>`
}

export default function main() {
  const html = div(`${span('hello')} ${span('world')}`)

  console.log(html)

  assert(
    html === '<div><span>hello</span> <span>world</span></div>',
    'The result should be "<div><span>hello</span> <span>world</span></div>"'
  )
}
