let nameSpan = document.getElementById('name')
let ageSpan = document.getElementById('age')
let languageSpan = document.getElementById('language')
let finalQuestionSpan = document.getElementById('final-question')

function questionsAndAnswers() {

  const name = prompt("Qual o seu nome?")
  const age = prompt("Quantos anos você tem?")
  const language = prompt("Qual linguagem de programação você está estudando?")
  const finalQuestion = prompt(`Você gosta de estudar ${language}? Responda com o número 1 para SIM ou 2 para NÃO.`)

  nameSpan.textContent = name
  ageSpan.textContent = age
  languageSpan.textContent = language

  if (finalQuestion == '1') {
    finalQuestionSpan.textContent = 'Muito bom! Continue estudando e você terá muito sucesso.'
  } else {
    finalQuestionSpan.textContent = 'Ahh que pena... Já tentou aprender outras linguagens?'
  }
}

questionsAndAnswers()
