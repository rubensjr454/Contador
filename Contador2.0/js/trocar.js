import { n1 } from './numero.js'
var msg = ''
function mostraTexto() {
  document.querySelector('#texto').innerHTML = msg
}

export function trocarTexto() {
  switch (n1) {
    case 4:
      msg = 'Apartir de agora eu que conto os numeros!'
      mostraTexto()
      break
    case 9:
      msg =
        'Caramba chegamos no 10! ja posso dizer que sou mais inteligente que a pre escola'
        mostraTexto()
      break
    case 11:
      msg = '*contando feliz*'
      mostraTexto()
      break
    case 29:
      msg =
        'oloko chegamos ao 30, espero que nao esteja contando quantas moedas tem no seu cofre'
        mostraTexto()
      break
    case 30:
      msg = '*Se perguntando oque você esta contando* '
      mostraTexto()
      break
    case 49:
      msg = 'você ja esta contando a tempo e eu ja estou ficando cansando'
      mostraTexto()
    case 50:
      msg = '*pensando em um modo de fazer você para de contar'
      mostraTexto()
      break
    case 99:
      msg = 'eu ja cansei de contar, acho que vou parar por aqui'
      mostraTexto()
      break
    case 100:
      const off = document.getElementById('mais')
      off.classList.remove('.show')
      off.classList.add('unshow')
      break
  }
}
