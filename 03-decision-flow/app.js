function frontOrBack() {
  let frontOrBack = prompt('Você quer ser (1) Front-End ou (2) Back-End?')

  if (frontOrBack == '1') {
    frontOrBack = 'Front-End'
    prompt(`Massa! Você quer ser ${frontOrBack}. E o que você quer aprender agora? React ou Vue?`)
  } else if (frontOrBack == '2') {
    frontOrBack = 'Back-End'
    prompt(`Massa! Você quer ser ${frontOrBack}. E o que você quer aprender agora? C# ou Java?`)
  }

  let isFullStack = prompt(`Você quer (1) seguir se especializando em ${frontOrBack} ou (2) seguir se desenvolvendo para se tornar Fullstack?`)
  if (isFullStack == '1') {
    alert('Massa! Então, bora estudar!')
  } else if (isFullStack == '') {
    alert('Daora! Então, bora estudar!')
  }

  let whatLang = prompt(`Quais são as tecnologias que você gostaria de se especializar ou conhecer? Digite uma de cada vez.`)
  alert(`${whatLang} é realmente uma tecnologia massa de conhecer!`)
  langCount = 0
  while (langCount >= 0) {
    whatLang = prompt(`Tem mais alguma tecnologia que você gostaria de aprender?`)
    langCount++
    alert(`Continue estudando que você vai dominar ${whatLang} logo logo!`)
  }
}

frontOrBack()