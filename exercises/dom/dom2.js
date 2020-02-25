// I AM NOT DONE

export default function main() {
  const root = document.getElementById('root')

  // add a span to the root element

  assert(root.children.length === 1, 'the root element should have 1 child')
  assert(root.children[0].tagName === 'SPAN', 'the child should be a span')
}
