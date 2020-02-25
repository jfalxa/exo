// I AM NOT DONE

export default function main() {
  const root = document.getElementById('root')

  const button = document.createElement('button')
  button.innerText = 'CLICK ME'

  const counter = document.createElement('span')
  counter.innerText = 0

  root.append(button)
  root.append(counter)

  // now make it so that every time you click on the button,
  // the number inside counter is incremented by 1
}
