//Uma fábrica de biscoitos da sorte precisa de um sistema. O sistema deve gerar seis dezenas aleatórias para serem impressas. Sabe como é: Palpites para seus clientes jogarem na mega sena! O seu trabalho é escrever uma função gerarDezenas(). Essa função não recebe nenhum parâmetro. Tudo que ela deve fazer é gerar e retornar um array contendo seis números aleatórios entre 1 e 60.

function gerarDezenas() {
    Array=[]
for(var i=0; i <6; i++)
    array.push(Math.round(Math.random() * 60))
    return array
}