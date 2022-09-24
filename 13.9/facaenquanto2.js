let numero = 0, total = 0

numero = prompt("Digite um numero: ")

do {
    total = parseInt(total) + parseInt(numero);
    numero--
} while (numero >= 0);
alert(total);