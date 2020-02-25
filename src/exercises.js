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
  }
]
