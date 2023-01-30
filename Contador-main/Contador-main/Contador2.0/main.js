var n1 = 0
var msg = ''

function mais() {
  n1++
  mostraNumero()
  mostraTexto()
  trocarTexto()
}

function menos() {
  n1--
  mostraNumero()
  mostraTexto()
  trocarTexto()
}

function mostraNumero() {
  const output = document.querySelector('#output')
  output.innerHTML = n1
}

function mostraTexto() {
  const text = document.querySelector('#texto')
  text.innerHTML = msg
}

function off() {
  // document.querySelector('button .show').style.display = 'none'
  const off = document.getElementById('button')
  console.log("achei")
  off.classList.remove('.show')
  console.log('removi')
  off.classList.add('unshow')
  console.log('passei')
}

function trocarTexto() {
  switch (n1) {
    case 4:
      msg = 'Apartir de agora eu que conto os numeros!'
      break
    case 9:
      msg =
        'Caramba chegamos no 10! ja posso dizer que sou mais inteligente que a pre escola'
      break
    case 11:
      msg = '*contando feliz*'
      break
    case 29:
      msg =
        'oloko chegamos ao 30, espero que nao esteja contando quantas moedas tem no seu cofre'
      break
    case 30:
      msg = '*Se perguntando oque você esta contando* '
      break
    case 49:
      msg = 'você ja esta contando a tempo e eu ja estou ficando cansando'
    case 50:
      msg = '*pensando em um modo de fazer você para de contar'
      break
    case 99:
      msg = 'eu ja cansei de contar, acho que vou parar por aqui'
      break
    case 100:
      off()
      break
  }
}
