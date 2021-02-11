//Uma empresa separou em uma lista, os valores dos lucros mensais. Com isso você terá no código um array com o seguinte nome: listaDeLucro contendo em cada posição o valor de recebido de cada mês! var listaDeLucro = [100, 30, 300, -10, 600, 10].
//Seu trabalho será criar um loop que calcule o valor total baseado nessa lista, e coloque o valor em uma variável já existente no código chamada: lucroTotal

var listaDeLucro = [100, 30, 300, -10, 600, 10]
var lucroTotal = 0;

//seu loop aqui
for (var i = 0; i < listaDeLucro.length; i++){
    lucroTotal = lucroTotal + listaDeLucro[i]
}
    {
    console.log(lucroTotal)
}