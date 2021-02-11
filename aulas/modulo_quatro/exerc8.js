//Vamos criar um bingo, onde os números da cartela serão representados por um array chamado cartela, e o número sorteado deve ficar em uma variável chamada numeroSorteado. Seu trabalho será  verificar se existe o número sorteado na cartela, quando encontrar deve imprimir “Encontrei o número!” e parar o loop! 

var cartela = [8, 13, 18, 22, 42, 49]
var numeroSorteado = 42

for (var i = 0; i < cartela.length; i++){
if (cartela[i] == numeroSorteado)
  console.log("Encontrei o número!")
  break
}