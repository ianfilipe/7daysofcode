// function frontOrBack() {
//   let frontOrBack = prompt('Você quer ser (1) Front-End ou (2) Back-End?')

//   if (frontOrBack == '1') {
//     frontOrBack = 'Front-End'
//     prompt(`Massa! Você quer ser ${frontOrBack}. E o que você quer aprender agora? React ou Vue?`)
//   } else if (frontOrBack == '2') {
//     frontOrBack = 'Back-End'
//     prompt(`Massa! Você quer ser ${frontOrBack}. E o que você quer aprender agora? C# ou Java?`)
//   }

//   let isFullStack = prompt(`Você quer (1) seguir se especializando em ${frontOrBack} ou (2) seguir se desenvolvendo para se tornar Fullstack?`)
//   if (isFullStack == '1') {
//     alert('Massa! Então, bora estudar!')
//   } else if (isFullStack == '') {
//     alert('Daora! Então, bora estudar!')
//   }

//   let whatLang = prompt(`Quais são as tecnologias que você gostaria de se especializar ou conhecer? Digite uma de cada vez.`)
//   alert(`${whatLang} é realmente uma tecnologia massa de conhecer!`)
//   langCount = 0
//   while (langCount >= 0) {
//     whatLang = prompt(`Tem mais alguma tecnologia que você gostaria de aprender?`)
//     langCount++
//     alert(`Continue estudando que você vai dominar ${whatLang} logo logo!`)
//   }
// }

// frontOrBack()

let frontEndDiv = document.getElementById('front-end')
let backEndDiv = document.getElementById('back-end')

let isFrontDiv = document.getElementById('is-front')
let isBackDiv = document.getElementById('is-back')

let specializeDiv = document.getElementById('specialize')
let fullstackDiv = document.getElementById('fullstack')

let langInput = document.getElementById('langs')
let langResultDiv = document.getElementById('langs-result')

let langInputTwo = document.getElementById('langs-two')
let langResultDivTwo = document.getElementById('langs-result-two')

frontEndDiv.style.display = 'none'
backEndDiv.style.display = 'none'

isFrontDiv.style.display = 'none'
isBackDiv.style.display = 'none'

specializeDiv.style.display = 'none'
fullstackDiv.style.display = 'none'

let frontEndStatus = false
let backEndStatus = false

let specializeStatus = false
let fullstackStatus = false

function frontEnd() {
  frontEndStatus = !frontEndStatus
  if (frontEndStatus == true && backEndStatus === false) {
    frontEndDiv.style.display = 'block'
  } else {
    frontEndDiv.style.display = 'none'
  }
}

function backEnd() {
  backEndStatus = !backEndStatus
  if (backEndStatus == true && frontEndStatus === false) {
    backEndDiv.style.display = 'block'
  } else {
    backEndDiv.style.display = 'none'
    return
  }
}

function frontOrBack() {
  if (frontEndStatus == true && backEndStatus === false) {
    isFrontDiv.style.display = 'block'
  } else if (backEndStatus == true && frontEndStatus === false) {
    isBackDiv.style.display = 'block'
  }
}

function specialize() {
  specializeStatus = !specializeStatus
  if (specializeStatus == true && fullstackStatus == false) {
    specializeDiv.style.display = 'block'
  } else {
    specializeDiv.style.display = 'none'
  }
}

function fullstack() {
  fullstackStatus = !fullstackStatus
  if (fullstackStatus == true && specializeStatus == false) {
    fullstackDiv.style.display = 'block'
  } else {
    fullstackDiv.style.display = 'none'
  }
}

countLang = 0

function printLangs() {
  while (countLang < 5) {
    langResultDiv.innerHTML += `${langInput.value}<br>`
    return countLang++
  }
}

countLangTwo = 0

function printLangsTwo() {
  while (countLangTwo < 5) {
    langResultDivTwo.innerHTML += `${langInputTwo.value}<br>`
    return countLangTwo++
  }
}