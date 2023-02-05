import { trocarTexto } from './trocar.js'

export let n1 = 0

export function mais() {
  n1++
  mostraNumero()
  trocarTexto()
  console.log('ggez')
}

export function menos() {
  n1--
  mostraNumero()
  trocarTexto()
  console.log('ggez')
}

function mostraNumero() {
  const output = document.querySelector('#output')
  output.innerHTML = n1
}

// export function mostraTexto() {
//   const text = document.querySelector('#texto')
//   text.innerHTML = msg
// }
