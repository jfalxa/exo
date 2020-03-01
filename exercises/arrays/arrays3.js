// I AM NOT DONE

// another approach to iterating through an array content is to use functions

// you just have to fill the forEach function but read the rest of the code
// to try and understand how it's used

function forEach(array, action) {
  // the forEach function loops through every element inside the array
  // and executes its parameter "action" on each element separately
  for // ...
}


function multiplyBy10(array) {
  let arrayX10 = []

  // the second parameter is a function that will be called for each element
  // just because, try to rewrite it as an arrow function (cf functions5)
  forEach(array, function pushX10(element) {
    arrayX10.push(element * 10)
  })

  return arrayX10
}

export default function main() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const arrayX10 = multiplyBy10(array)

  assert(
    JSON.stringify(arrayX10) === '[10,20,30,40,50,60,70,80,90,100]',
    'arrayX10 should be like array but with each item multiplied by 10'
  )
}
