//Algoritmo Exemplo2.1.js
var salario: real
    idade, n_pessoas, tot_pessoas: inteiro

    n_pessoas <= 1
    tot_pessoas <= 0

    Enquanto (n_pessoas <= 50) Faça
        Ler (idade, salario)
        se (idade < 30) e (salario > 3000,00) Então
            tot_pessoas <= tot_pessoas + 1
        Fim-se
        n_pessoas <= n_pessoas + 1
    Fim-Enquanto
    Mostrar ("Número total de pessoas:", tot_pessoas)
    Fim;