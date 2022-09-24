let TaxaImposto, Custo, resultado
TaxaImposto = prompt("Qual é a taxa de Imposto: ")
Custo = prompt("Qual é o custo do produto: ")

function SomaImposto(TaxaImposto, Custo) {
    resultado = parseFloat(Custo) + (parseInt(TaxaImposto) / 100)

    return resultado
}
alert("O preço do produto é de: " + Custo + "\nA taxa de Imposto é de: " + TaxaImposto + "\nO preço do produto com a taxa de Imposto é: " + SomaImposto(TaxaImposto, Custo))
