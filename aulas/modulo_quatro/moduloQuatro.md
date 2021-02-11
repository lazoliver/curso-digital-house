# LOOP FOR

## *FOR* utiliza um contador para definir quantas vezes deve ser repetido. O mais legal é que podemos decidir em qual número o contador deve iniciar, e qual o limite em que deve parar.

**SINTAXE DO FOR**

Esse comando é composto por três partes principais que ficam entre parênteses separados por ponto e vírgula. As 3 partes são: a variável que vai guardar o número inicial do contador, a condição de parada e o incrementador:

*for (inicio; condição de parada; incrementador){*

//código que deve ser repetido

*}*

**EXEMPLO**

Neste código, temos um laço de repetição para imprimir "Dia X", sete vezes, sendo que no lugar do X queremos o número dinâmico:

*for (var index= 1; index < 10; index++){*

console.log("Dia " + contador)

*}*

# LOOP ARRAY

## Sempre que precisar trabalhar com array, passando por cada elemento da lista, utilize um laço de repetição para trazer praticidade e garantir que realmente vá no índice 0 até o último da lista

**ITEM DO ARRAY**

Lembre-se que para trazer o valor de um item do array precisamos do nome da variável que guarda o array e o índice:

*var alunos = ["Ana", "Julia", "Bento", "Lucas"]*

*console.log(alunos[0]) // imprime "Ana"*

*console.log(alunos[1]) //imprime "Julia"*

*console.log(alunos[2]) //imprime "Bento"*

*console.log(alunos[3]) //imprime "Lucas"*

***Importante: O indíce do array sempre começa no 0(zero)!***

----

**TAMANHO DO ARRAY**

Para utilizar um laço de repetição, precisamos saber o tamanho do array e utilizar essa informação para definir quantas vezes a repetição deve acontecer.

Sorte que temos o comando .length para trazer o tamanho do array:

*var alunos = ["Ana", "Julia", "Bento", "Lucas"]*

*console.log(alunos.length) // imprime 4*

----

**SINTAXE FOR COM ARRAY**

O **for** continua com a mesma sintaxe, mas vamos dar uma atenção maior ao contador. Utilizaremos o contador não somente para controlar o número de repetições mas também para pegar um elemento da lista.

O valor inicial deve ser 0 para pegar a primeira posição do array e a condição de parada deve ser menor que o tamanho do array:

*var alunos = ["Ana", "Julia", "Bento", "Lucas"]*

*for (var index = 0; index < alunos.length; index++){*

// código que deve se repetir

*}*

----

**FOR COM ARRAY - indíces**

O **for** continua com a mesma sintaxe, mas vamos dar uma atenção maior ao contador. Utilizaremos o contador não somente para controlar o número de repetições, mas também para pegar um elemento da lista.

O valor inicial deve ser 0 para pegar a primeira posição do array e a condição de parada deve ser menor que o tamanho do array:

*var alunos = ["Ana", "Julia", "Bento", "Lucas"]*

*for (var index = 0; index < alunos.length; index++){*

*console.log(alunos[index])*

*}*

----

# BREAK E CONTINUE

## O break é um comando reservado que, quando o loop processa ele irá parar todo o ciclo, independente de quantos faltam!

**SINTAXE BREAK**

O loop deve parar assim que ele encontrar o nome que estamos esperando, evitando ficar percorrendo todo o nosso array. Legal, né? Dessa forma ganhamos velocidade em encontrar os dados e o nosso computador não irá fazer ações desnecessárias.

*for (var i = 0; i < listaDeNomes.length; i++){*

​	*if(listaDeNomes[i] == buscar){*

​	*console.log('Encontrei o nome')*

​	*break*

​	*}*

*}*

## O continue é um comando reservado que, quando o loop processa ele irá pular um ciclo!

**SINTAXE CONTINUE**

O loop deve pular para próxima interação assim que ele encontrar o nome que estamos esperando.

​	*var listaDeNomes = ['Cesar', 'Pamela', 'Camila', 'Hendy']*

*for(var i = 0; i < listaDeNomes.length; i++){*

​	*if (listaDeNomes[i] == 'Cesar'){*

​	*continue*

// Quando o nome for *Cesar*, ele simplesmente passa para o próximo loop

​	*}*

​	*console.log(listaDeNomes[i])*

*}*