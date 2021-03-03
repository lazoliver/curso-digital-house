/* Vamos otimizar nosso sistema de autoescola!
Caso o usuário tenha 18 anos ou mais, ele pode dirigir, se a afirmação for negativa precisamos imprimir a mensagem “Ops, você ainda não tem a idade mínima para dirigir!”.
Parte do código já está pronto, agora é sua vez de utilizar o else para dar um feedback ao usuário! */

var idade = 15

if (idade >= 18) {
    console.log("Você já pode dirigir!")
} else {
    console.log("Ops, você ainda não tem a idade mínima para dirigir!")
};

/* Utilize a condicional if/else para verificar a variável estrangeiro que guarda um valor booleano. Caso o valor seja verdadeiro solicite o Registro Nacional de Estrangeiros(RNE). Se o valor for falso solicite o Cadastro de Pessoa Física (CPF).

Mensagem para estrangeiro: “Você poderia apresentar seu RNE, por favor?”
Mensagem para brasileiro: “Você poderia apresentar seu CPF, por favor?” */

var estrangeiro = true

if (estrangeiro) {
  console.log("Você poderia apresentar seu RNE, por favor?")
}else {
  console.log("Você poderia apresentar seu CPF, por favor?")
};