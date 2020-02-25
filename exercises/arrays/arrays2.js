// I AM NOT DONE

function multiplyItemsBy10(array) {
  const arrayX10 = []

  // add items to arrayX10 based on array's content

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
