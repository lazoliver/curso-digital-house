/* Precisamos verificar se uma pessoa pode se aposentar com base na idade. Utilize a condicional if else para verificar se a variável idade é maior que 65 e imprima uma mensagem para cada caso:
Condição verdadeira : “Você já pode se aposentar”
Condição falsa: “Você ainda não pode se aposentar” */

var idade = 40

if (idade > 65) {
    console.log("Você já pode se aposentar")
} else {
    console.log("Você ainda não pode se aposentar")
};

/* Dentro do código estará criada uma variável numeroDaSorte  contendo um número. Sua missão é verificar se o valor da variável é par ou ímpar utilizando o operador relacional módulo (%). Imprima “Par” ou “Ímpar” de acordo com o resultado.*/

var numeroDaSorte = 18

if (numeroDaSorte % 2  == 0) {
    console.log("Par")
}else { 
    console.log("Ímpar")
};