# Exos

Set of javascript exercises inspired by https://github.com/rust-lang/rustlings.

For each exercise, you are given one JS script that contains errors (either at compile time or run time), your goal is to fix them all.

## Setup

- You need to have `node` and `npm` installed.
- Clone this repository: `git clone git@github.com:jfalxa/exos`
- Run `npm install` inside to get the needed dependencies
- Run `npm start` to start the program
- Open your browser at http://localhost:1234
- Show the dev tools on that page
- Open the cloned repo in your favorite text editor
- Start fixing the files inside the `exercises` directory !

N.B: If your code compiles without errors, **it does not mean that it's working**: make sure you also do not have any errors shown in your dev tools' console before moving onto the next exercise. Sometimes, the page will not refresh automatically, so you'll have to do it manually.

If you're having any trouble, read all the error messages carefully, they might contain information that will help you solve your problem. Otherwise, type `hint` in your dev tools' console so show some tips. Also, every exercise section contains a `README.md` file that points you to relevant sections of the Mozilla Developper Network documentation, reading them is recommended.

## Commands

### Watch mode

Run `npm start` to start watching for changes in your exercises. Edit them in your text editor and once you feel you're done, remove the `// I AM NOT DONE` line from the file to move onto the next task.

### Filtered mode

Run `npm start [string]` to only watch the exercises which title match the passed string.

### Hints

Run `npm start hint [exercise]` to display hints for the given exercise.
