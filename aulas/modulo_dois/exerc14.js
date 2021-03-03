/*Posso comprar esse produto?
Queremos criar um código que ajude o usuário a saber se ele pode comprar um produto ou não. Para acontecer a venda, a quantidade do produto no estoque tem que ser maior que zero e o produto está ativo.
Para escrever este código, teremos duas variáveis já definidas: produtoQtd, produtoAtivo. 
Faça uma condição que supra a necessidade acima, se o usuário puder comprar o produto exiba a seguinte mensagem “Você pode finalizar essa compra”. Caso contrário exiba “Produto não está disponível para compra”*/

var produtoQtd = 3
var produtoAtivo = true

if (produtoQtd > 0 && produtoAtivo) {
    console.log("Você pode finalizar essa compra")
}else {
    console.log("Produto não está disponível para compra")
};

/* Pode subir?

Um parque de diversão te contratou para criar um código para ajudar os usuários a saber se eles podem ir em uns dos brinquedos. As regras são:
- Ser maior que 1,50m ou ter 21 anos ou mais.
Diante disso, crie condições que supra essa necessidade, exiba a seguinte mensagem caso o usuário possa usar o brinquedo: “Você pode subir”. Caso ele não possa: “Desculpe, você não atende os requisitos para usar o brinquedo”.
Vale dizer que para esse exercício você terá duas variáveis: usuarioAltura e usuarioIdade */

var usuarioAltura = 170
var usuarioIdade = 21

if (usuarioAltura > 150 || usuarioIdade >= 21) {
    console.log("Você pode subir")
}else {
    console.log("Desculpe, você não atende os requisitos para usar o brinquedo")
};

/*Será que posso ir ao banco?
Precisamos criar um código que ajude os usuários a saber se pode ir ao banco. Sabemos que o banco está aberto em todos os os dias da semana, exceto em  finais de semana. Caso o usuário possa ir ao banco você deve exibir com console.log a seguinte mensagem: “Você pode ir ao banco”, caso contrário, ‘O banco está fechado, tente outro dia’
Para esse exercício leve em consideração as seguintes informações:
- Dias da semana pro sistema: segunda, terca, quarta, quinta, sexta, sabado e domingo.
- Você terá a seguinte variável no código: diaSemana
- Para esse exercício você deve usar na condição do if o operador && para juntar as condições lógicas junto ao operador diferente de(!=).
Se você tiver problemas para resolver este exercício, pressione resetar codigo e tente novamente.*/

var diaSemana = 'sabado'

if (diaSemana != "sabado" && diaSemana != "domingo") {
    console.log("Você pode ir ao banco")
}else {
    console.log("O banco está fechado, tente outro dia")
};