//Depois de nossa consultoria, a lavanderia DigitalLaundry percebeu que poderia deixar a sua cobrança mais sofisticada e justa. Ela decidiu cobrar R$10,00 fixo, a título de taxa de serviço (independente da quantidade de roupa), mais R$ 3,00 por quilo de roupa suja. Reescreva a função calculaValorDevido: function calculaValorDevido(pesoDeRoupaSuja)
//Essa função recebe como único parâmetro a quantidade de roupa suja. Ela deve retornar o valor a ser cobrado do cliente usando a nova política de preços.

function calculaValorDevido(pesoDeRoupaSuja) {
    return pesoDeRoupaSuja * 3 + 10
}