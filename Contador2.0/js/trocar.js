import { n1 } from './numero.js'

export function trocarTexto() {
  var msg = ''
  const text = document.getElementById('texto')
  text.innerHTML = msg
  console.log('mensagem')
  switch (n1) {
    case 4:
      console.log('executou')
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
      const off = document.getElementById('mais')
      off.classList.remove('.show')
      off.classList.add('unshow')
      break
  }
}
