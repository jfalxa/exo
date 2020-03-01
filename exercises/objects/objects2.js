// I AM NOT DONE

function multiplyBy10(object) {
  const objectX10 = {}

  // loop through object keys and add their values x10 to objectX10
  for // ...

  return objectX10
}

export default function main() {
  const object = { a: 1, b: 2, c: 3 }
  const objectX10 = multiplyBy10(object)

  assert(
    JSON.stringify(objectX10) === '{"a":10,"b":20,"c":30}',
    'The object should contain a:10, b:20 and c:30'
  )
}
