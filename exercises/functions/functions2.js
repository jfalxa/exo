// I AM NOT DONE

function callMe() {
  for (let i = 0; i < num; i++) {
    console.log('Ring! Call number %d', i + 1)
  }
}

export default function main() {
  callMe(3) // you should see 3 lines in the console if it works
}
