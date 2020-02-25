// I AM NOT DONE

export default function main() {
  const object = {}

  console.log(object)

  assert(
    JSON.stringify(object) === '{"a":1,"b":2,"c":3}',
    'The object should contain a:1, b:2 and c:3'
  )
}
