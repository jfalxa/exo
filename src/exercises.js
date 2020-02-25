module.exports = [
  {
    name: 'variables1',
    path: 'exercises/variables/variables1.js',
    hint:
      'The declaration on line 9 is missing a keyword in order to create a new variable.'
  },
  {
    name: 'variables2',
    path: 'exercises/variables/variables2.js',
    hint: `The compiler is expecting something at line 4.
'const' variables need to be initialized with a value.
On the other hand, 'let' variable do not require being initialized.`
  },
  {
    name: 'variables3',
    path: 'exercises/variables/variables3.js',
    hint: `'const' variables can only be declared and assigned once.`
  },

  {
    name: 'ifs1',
    path: 'exercises/ifs/ifs1.js',
    hint: `In JS you have two ways of dealing with conditions:
    - through if...else
    - using the ternary operator 'condition ? valueA : valueB'`
  },

  {
    name: 'functions1',
    path: 'exercises/functions/functions1.js',
    hint: 'The callMe function does not exist, make sure it does.'
  },
  {
    name: 'functions2',
    path: 'exercises/functions/functions2.js',
    hint: 'When declaring a function you can specify different parameters.'
  },
  {
    name: 'functions3',
    path: 'exercises/functions/functions3.js',
    hint: 'Functions can optionally return an ouput'
  },
  {
    name: 'functions4',
    path: 'exercises/functions/functions4.js',
    hint: 'Functions can be passed as parameters of other functions.'
  },
  {
    name: 'functions5',
    path: 'exercises/functions/functions5.js',
    hint: 'Arrow functions are a shorter way to declare functions.'
  },

  {
    name: 'loops1',
    path: 'exercises/loops/loops1.js',
    hint: 'Use a for loop to add numbers to each other'
  },
  {
    name: 'loops2',
    path: 'exercises/loops/loops2.js',
    hint:
      'Add a condition on i to the while statement and update i on every iteration'
  },
  {
    name: 'loops3',
    path: 'exercises/loops/loops3.js',
    hint: `You can loop from the end to the beginning by doing: for (let i=str.length - 1; i >= 0; i--)
If you want to interrupt the loop when you found the vowel, you can use the keyword "break" that will jump out of the loop statement and run what's after.
Or you can directly call "return ..." inside the loop in order to end your function's execution.`
  },

  {
    name: 'strings1',
    path: 'exercises/strings/strings1',
    hint: `Strings can be combined using the "+" operator.
Example: "a" + "b" === "ab"`
  },
  {
    name: 'strings2',
    path: 'exercises/strings/strings2',
    hint: 'Template strings allow you to execute any JS expression inside ${}'
  },
  {
    name: 'strings3',
    path: 'exercises/strings/strings3',
    hint: `The are many ways to extract parts of a string:
    - access the n-th character of a string by doing "string[n]"
    - separate a string in multiple pieces using "string.split(separator)"
    - replace part of the string with something else using "string.replace(stringToReplace, stringReplacement)"`
  },

  {
    name: 'arrays1',
    path: 'exercises/arrays/arrays1',
    hint: `You can either:
    - initialize the array with 1,2,3 
    - use "array.push(element)" to add them manually after initalization
    - initialize the array using "const array = Array(length)" and then doing "array[n] = n"`
  },
  {
    name: 'arrays2',
    path: 'exercises/arrays/arrays2',
    hint: `Inside a for loop, you can use an array's length to iterate through every item of this array.
    
This might also be a good occasion to use a while loop in combination with:
    - "array.shift()" which removes the first element of the array and returns it
    - "array.pop()" which removes the last element of the array and returns it + "array.reverse()"`
  },
  {
    name: 'arrays3',
    path: 'exercises/arrays/arrays3',
    hint: `Inside a for loop, you can use an array's length to iterate through every item of this array`
  },
  {
    name: 'arrays4',
    path: 'exercises/arrays/arrays4',
    hint: 'Follow the white rabbit'
  }
]
