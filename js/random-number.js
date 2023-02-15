var nr = Math.round(Math.random() * 10)
var ch = 1

export function numberRandom() {
  console.log(nr)
  while (ch <= 3) {
    var rp = parseFloat(prompt('Adivinha o numero para continuar'))
    if (rp == nr) {
      alert('Parabens,você acertou o numero era: ' + nr + '.')
      break
    } else if (ch == 3) {
      alert('Suas chances acabaram, o numero era ' + nr)
    } else {
      alert('Você errou!!!')
    }

    ch++
  }
}
