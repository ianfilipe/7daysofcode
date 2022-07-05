let typeOfOperation = ''

function openCalc() {
  for (let i = 0; i >= 0; i++) {
    typeOfOperation = prompt(`Qual operação você deseja realizar? Digite:\n1 - Para adição\n2 - Para subtração\n3 - Para multiplicação\n4 - Para divisão\n\n5 - Para sair`)
    if (typeOfOperation == 1) {
      calcAdd()
    } else if (typeOfOperation == 2) {
      calcSub()
    } else if (typeOfOperation == 3) {
      calcMult()
    } else if (typeOfOperation == 4) {
      calcDiv()
    } else if (typeOfOperation == 5) {
      alert('Até a próxima!')
      break
    } else {
      alert('Digite uma opção válida.')
    }
  }
}

function calcAdd(numberOne, numberTwo) {
  numberOne = parseInt(prompt('Qual o primeiro número?'))
  numberTwo = parseInt(prompt('Qual o segundo número?'))
  return alert(`O resultado da operação é: ${numberOne + numberTwo}`)
}

function calcSub(numberOne, numberTwo) {
  numberOne = parseInt(prompt('Qual o primeiro número?'))
  numberTwo = parseInt(prompt('Qual o segundo número?'))
  return alert(`O resultado da operação é: ${numberOne - numberTwo}`)
}

function calcMult() {
  numberOne = parseInt(prompt('Qual o primeiro número?'))
  numberTwo = parseInt(prompt('Qual o segundo número?'))
  return alert(`O resultado da operação é: ${numberOne * numberTwo}`)
}

function calcDiv() {
  numberOne = parseInt(prompt('Qual o primeiro número?'))
  numberTwo = parseInt(prompt('Qual o segundo número?'))
  return alert(`O resultado da operação é: ${numberOne / numberTwo}`)
}