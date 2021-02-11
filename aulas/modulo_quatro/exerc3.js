//Uma agência de carros quer exibir seu catálogo para os clientes. Eles exportaram os nomes dos carros no formato de array que se chama listaDeCarros, que vai estar disponível no código. Seu trabalho é percorrer essa array exibindo os nomes dos carros: “Nome do Carro: Fox”; “Nome do Carro: Uno”.
//Crie um loop que atenda o problema acima utilizando uma variável chamada i como contador, e que use o console.log para exibir o nome dos carro de acordo com o exemplo acima.

var listaDeCarros = [ "Fox", "Uno", "Gol", "Astra", "Fiesta"]
var carros = listaDeCarros.length
for (let i = 0; i < listaDeCarros.length; i++) {
// Seu loop aqui:
    console.log("Nome do Carro: " + listaDeCarros[i])
}