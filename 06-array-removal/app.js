var foodList = [
  ['Frutas: '],
  ['Laticínios: '],
  ['Congelados:'],
  ['Doces: ']
]

let shopListResponse = ''

let fruitList = foodList[0]
let dairyList = foodList[1]
let frozenList = foodList[2]
let candyList = foodList[3]

function shopList() {
  for (let i = 0; i >= 0; i++) {
    if (fruitList.indexOf(fruitList[1]) != -1 || dairyList.indexOf(dairyList[1]) == true || frozenList.indexOf(frozenList[1]) == true || candyList.indexOf(candyList[1]) == true) {
      shopListResponse = prompt('Você deseja adicionar uma comida na sua lista de compras? Digite "1" para "sim" e "2" para "não". Digite "3" se quiser remover algum item da lista.')
    } else {
      shopListResponse = prompt('Você deseja adicionar uma comida na sua lista de compras? Digite "1" para "sim" e "2" para "não".')
    }
    if (shopListResponse == 1) {
      let foodListResponse = prompt('Qual comida você deseja inserir?')
      let foodListCategory = prompt('Em qual categoria essa comida se encaixa? Digite "1" para "Frutas", "2" para  "Laticínios", "3" para "Congelados" e "4" para "Doces".')
      if (foodListCategory == 1) {
        fruitList.push(foodListResponse)
      } else if (foodListCategory == 2) {
        dairyList.push(foodListResponse)
      } else if (foodListCategory == 3) {
        frozenList.push(foodListResponse)
      } else if (foodListCategory == 4) {
        candyList.push(foodListResponse)
      }
    } else if (shopListResponse == 2) {
      alert(`Essa é sua lista de compras:\n${fruitList}\n${dairyList}\n${frozenList}\n${candyList}`)
      // document.getElementById('food-list').innerHTML = `<p>${fruitList}</p> <p>${dairyList}</p> <p>${frozenList}</p> <p>${candyList}</p>`
      break
    } else if (shopListResponse == 3) {
      let deleteResponse = prompt(`Qual item você deseja remover?\n${fruitList}\n${dairyList}\n${frozenList}\n${candyList}`)
      if (fruitList.indexOf(deleteResponse) != -1) {
        fruitList.splice(fruitList.indexOf(deleteResponse))
      } else if (dairyList.indexOf(deleteResponse) != -1) {
        dairyList.splice(dairyList.indexOf(deleteResponse))
      } else if (frozenList.indexOf(deleteResponse) != -1) {
        frozenList.splice(frozenList.indexOf(deleteResponse))
      } else if (candyList.indexOf(deleteResponse) != -1) {
        candyList.splice(candyList.indexOf(deleteResponse))
      } else {
        alert('Não foi possível encontrar o item dentro da lista!')
      }
    }
  }
}