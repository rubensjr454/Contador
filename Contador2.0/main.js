var n1 = 0

function mais() {
  n1++
  mostraNumero()
}

function menos() {
  n1--
  mostraNumero()
}

function mostraNumero() {
  const output = document.querySelector('#output')
  output.innerHTML = n1
}

function mostraTexto() {
  const text = document.querySelector('#texto')
}
