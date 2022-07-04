var foodList = [
  ['Frutas: '],
  ['Laticínios: '],
  ['Congelados:'],
  ['Doces: ']
]

let shopListResponse = ''

function shopList() {
  for (let i = 0; i >= 0; i++) {
    if (foodList[0].indexOf(foodList[0][1]) != -1 || foodList[1].indexOf(foodList[1][1]) == true || foodList[2].indexOf(foodList[2][1]) == true || foodList[3].indexOf(foodList[3][1]) == true) {
      shopListResponse = prompt('Você deseja adicionar uma comida na sua lista de compras? Digite "1" para "sim" e "2" para "não". Digite "3" se quiser remover algum item da lista.')
    } else {
      shopListResponse = prompt('Você deseja adicionar uma comida na sua lista de compras? Digite "1" para "sim" e "2" para "não".')
    }
    if (shopListResponse == 1) {
      let foodListResponse = prompt('Qual comida você deseja inserir?')
      let foodListCategory = prompt('Em qual categoria essa comida se encaixa? Digite "1" para "Frutas", "2" para  "Laticínios", "3" para "Congelados" e "4" para "Doces".')
      if (foodListCategory == 1) {
        foodList[0].push(foodListResponse)
      } else if (foodListCategory == 2) {
        foodList[1].push(foodListResponse)
      } else if (foodListCategory == 3) {
        foodList[2].push(foodListResponse)
      } else if (foodListCategory == 4) {
        foodList[3].push(foodListResponse)
      }
    } else if (shopListResponse == 2) {
      alert(`Essa é sua lista de compras:\n${foodList[0]}\n${foodList[1]}\n${foodList[2]}\n${foodList[3]}`)
      // document.getElementById('food-list').innerHTML = `<p>${foodList[0]}</p> <p>${foodList[1]}</p> <p>${foodList[2]}</p> <p>${foodList[3]}</p>`
      break
    } else if (shopListResponse == 3) {
      let deleteResponse = prompt(`Qual item você deseja remover?\n${foodList[0]}\n${foodList[1]}\n${foodList[2]}\n${foodList[3]}`)
      if (foodList[0].indexOf(deleteResponse) != -1) {
        foodList[0].splice(foodList[0].indexOf(deleteResponse))
      } else if (foodList[1].indexOf(deleteResponse) != -1) {
        foodList[1].splice(foodList[1].indexOf(deleteResponse))
      } else if (foodList[2].indexOf(deleteResponse) != -1) {
        foodList[2].splice(foodList[2].indexOf(deleteResponse))
      } else if (foodList[3].indexOf(deleteResponse) != -1) {
        foodList[3].splice(foodList[3].indexOf(deleteResponse))
      } else {
        alert('Não foi possível encontrar o item dentro da lista!')
      }
    }
  }
}

// var arr = [
//   ['Frutas: ', 'Maçã'],
//   ['Laticínios: '],
//   ['Congelados:'],
//   ['Doces: ']
// ]

// console.log(arr[0].includes('Maçã'))