let filhos, sal100 = 0, i = 0, salario, soma = 0.0, mediaSal = 0.0, mediaF = 0.0, mSal = 0.0, perc
for (i = 0; i <= 20; i++) {
    salario = prompt("Digite o salário: ");
    filhos = prompt("Digite a quantidade de filhos: ");

    soma = parseFloat(soma) + parseFloat(salario)
    mediaF = parseFloat(mediaF) + parseFloat(filhos) //ParseFloat = identificar como um número real, número quebrado.
    if (mSal < salario) {
        mSal = parseFloat(salario)
    }
    if (salario <= 100) {
        parseFloat(sal100++)
    }
} mediaSal = soma / 20;
mediaF = parseInt(mediaF) / 20; // parseInt = transformar em numero inteiro.
perc = (parseFloat(sal100) / 20) * 100
alert("\nA média do salário da população é: " + mediaSal + "\nA média de filhos da população é: " + mediaF + "\nO maior salário foi: " + mSal + "\nO percentual de pessoas com salário até" + "100 reais é: " + perc + "%")
