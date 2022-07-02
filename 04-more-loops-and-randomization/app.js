function whatNumber() {
  // const myNumber = 1
  const myNumber = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
  for (i = 0; i < 3; i++) {
    let answer = prompt('De 0 a 10, em qual número estou pensando?')
    if (i == 2 && answer != myNumber) {
      alert(`Suas chances acabaram. O número era ${myNumber}.`)
    } else if (answer == myNumber) {
      alert('Acertou!')
      break
    } else {
      alert(`Errou! Você só tem mais ${2 - i} tentativas.`)
    }
  }
}