// I AM NOT DONE

function callWith10(action) {
  return action(10)
}

export default function main() {
  const result = callWith10(myFunction)

  assert(result == 20)
}
