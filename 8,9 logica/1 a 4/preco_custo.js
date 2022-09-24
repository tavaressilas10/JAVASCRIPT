//1 - Faça um Algoritmo que receba o preço
// de custo de um produto e mostre o valor da venda.
// sabe-se que o preço de custo receberá
// um acréscimo de acordo com um percentual informado pelo usuário  

let preço_custo, valor_venda, percentual
percentual =Number.parseInt(prompt("Percentual para venda do produto"))
preço_custo =Number.parseInt(prompt("Digite o valor de custo"))

valor_venda = preço_custo + (percentual/100) 

alert(valor_venda)