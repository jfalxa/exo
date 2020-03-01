// I AM NOT DONE

export default function main() {
  // DESTRUCTURING OBJECTS:

  const object = { a: 'a', b: 'b', c: 'c' }

  const {
    /* ... */
  } = object

  assert(a === 'a', 'the extracted key a should have the value "a"')

  assert(
    JSON.stringify(bc) === '{"b":"b","c":"c"}',
    'the variable bc should contain every key but "a"'
  )

  // DESTRUCTURING ARRAYS:

  const array = [1, 2, 3, 4]

  const [
    /* ... */
  ] = array

  assert(arrayFirst === 1, 'the extracted first element of the array is 1')

  assert(arraySecond === 2, 'the extracted second element of the array is 2')

  assert(
    JSON.stringify(arrayRest) === '[3,4]',
    'the rest of the array is [3,4]'
  )
}
