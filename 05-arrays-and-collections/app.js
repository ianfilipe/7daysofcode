var foodList = [
  ['Frutas: '],
  ['Laticínios: '],
  ['Congelados:'],
  ['Doces: ']
]

function shopList() {
  for (let i = 0; i >= 0; i++) {
    let shopListResponse = prompt('Você deseja adicionar uma comida na sua lista de compras? Digite "1" para "sim" e "2" para "não".')
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
      document.getElementById('food-list').innerHTML = `<p>${foodList[0]}</p> <p>${foodList[1]}</p> <p>${foodList[2]}</p> <p>${foodList[3]}</p>`
      break
    }
  }
}