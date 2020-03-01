// I AM NOT DONE

// add items to arrayX10 based on array's content
function multiplyItemsBy10(array) {
  const arrayX10 = []

  // loop through array values and add them x10 to arrayX10
  for // ...

  return arrayX10
}


export default function main() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const arrayX10 = multiplyItemsBy10(array)

  assert(
    JSON.stringify(arrayX10) === '[10,20,30,40,50,60,70,80,90,100]',
    'arrayX10 should be like array but with each item multiplied by 10'
  )
}
