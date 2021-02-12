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

#	DECLARANDO FUNÇÕES

## Funções é uma forma de encapsular. Assim, iremos criar soluções a partir da definição do que é necessário para o método realizá-las.

**SINTAXE FUNCTION**

A primeira coisa que precisamos fazer em uma função é usar a palavra reservada function, pois com ela iremos indicar que queremos criar uma função. Na sequência, devemos indicar um nome para essa função. Fazemos isso pelo mesmo motivo que colocamos nomes em variáveis, ou seja, para poder usá-las e saber qual exatamente queremos usar em determinado momento.

*function saudacao (){*

​	*console.log('Olá, seja bem vindo!')*

*}*

----

**EXEMPLO**

*function exibirNomeDeCarros(){*

​	*var listaDeCarros = ['Fox', 'Celta', 'Uno', 'Astra']*

​	*for(var i = 0; i < exibirNomeDeCarros.length; i++){*

​		*console.log("Nome do carro é: " + listaDeCarros[i])*

​	*}*

*}*

# FUNÇÕES PARAMETRIZADAS

## Ao invés de trabalharmos com os valores fixos, vamos trabalhar com informações dinâmicas, utilizando parâmetros em funções.

**FUNÇÕES PARAMETRIZADAS**

Na prática, precisamos definir quais parâmetros a função deve receber na declaração. Para isso, basta dar um nome para cada parâmetro entre os parênteses, separando-os por vírgula:

*function soma(numeroA,numeroB) {*

​	*console.log(numeroA + numeroB)*

*}*

Poderíamos usar números fixos, mas para tornar o código reutilizável usaremos os parâmetros **numeroA** e **numeroB**.

Os parâmetros se comportam como variáveis dentro da função. Não precisam ser declarados dentro da mesma.

## Precisamos definir o que a função precisa fazer, ou seja, se ela irá apenas realizar uma ação, como por exemplo exibir um console, ou se ela irá devolver alguma informação, nesse caso utilizarmos **return**.

**FUNÇÕES COM RETORNO**

O comando **return** ou em português, **retornar**. Como o nome já diz, ela irá nos retornar um valor, seja ele número, string, array e afins.

*function soma(numeroA, numeroB) {*

​	*return numeroA + numeroB*

*}*

O return é **SEMPRE** a última linha de uma função. Sempre que o computador interpretar essa linha, ele entende que a função acabou ali. Qualquer código após o return de uma função será desconsiderado.

# FUNÇÕES NATIVAS

## Javascript tem diversas funções nativas que nos ajudam a realizar expressões matemáticas, manipular arrays e stings. Descobrimos que todo array tem uma propriedade chamada *length* que traz a quantidade de índices, mas o JS oferece muito mais, temos *funções nativas* para trabalhar com *arrays*!

**Array.pop()**

A função pop é sempre utilizada a partida de um array, e remove sempre último elemento de um array e por fim retorna o seu valor. Veja esse exemplo:

*var frutas = ["Bananas", "Uva", "Maçã", "Laranja"]*

// além de remover a função pop, retorna o valor removido! 

*var ultimaFruta = frutas.pop()* // "Laranja"

*console.log(frutas)*

// ["Bananas", "Uva", "Maçã"]

----

**Array.push**

Você já se perguntou como podemos adicionar novos itens em um array criado? Bom, fazemos isso com a função push. Iremos passar a informação que queremos inserir dentro do array como parâmetro, e ela por sua vez irá adicionar o novo item na última posição do array:

*var frutas = ["Bananas", "Uva", "Maça", "Laranja"]*

*frutas.push("Goiaba")*

*console.log(frutas)*

// ["Bananas", "Uva", "Maça", "Laranja", "Goiaba"]

----

**Array.indexOf()**

Essa função vai te ajudar muito quando você quiser descobrir se um elemento existe dentro de um array. Você deverá passar o valor procurado como parâmetro dessa função, e se ela encontrar o valor, ela irá retornar a posição do item dentro do array. Caso não encontre, ela irá sempre retornar -1.

*var frutas = ["Bananas", "Uva", "Maça", "Laranja"]*

*console.log(frutas.indexOf("Melancia"))*

// Irá retornar -1, pois não existem nenhum elemento que faça match

*console.log(frutas.indexOf("Uva"))*

// Irá retornar 1, pois é a posição que a uva se encontra

## JS já possui diversas *funções nativas* que fazem os *cálculos* e retornam os resultados prontos. Nós só precisamos saber qual o nosso objetivo e entender o que cada função faz.

**Math.random()***

A função Math.random() retorna um número aleatório entre 0 e 1.

Exemplo:

*Math.random()* // retorna 0.40316

Digamos que se deseja gerar um número aleatório inteiro entre 0 e 50. Para fazer isso realizamos dois passos. Multiplicamos o número por 50:

_Math.random() * 50_ // retorna 20.15804

Depois utilize a função Math.round() para arredondar e obter o número inteiro:

_Math.round(Math.random() * 50)_ // retornou 20

----

**Math.mim()**

A função Math.min() recebe 2 ou mais parâmetros e retorna o menor valor. 

Exemplo:

*Math.min(16, 10, 15) // retorna 10*

O interessante é que podemos utilizar variáveis como argumentos para tornar mais dinâmico. Vamos ver em um cenário onde queremos comparar preços de produtos:

*var precoTubaina = 3.00*

*var precoGuarana = 3.50*

*Math.min(precoTubaina, precoGuarana)*

// retorna 3.00 (precoTubaina)

----

**Math.max()**

A função Math.max() é muito semelhante a Math.min(), mas nesse caso retorna o maior número entre os parâmetros.

*Math.max(16, 10, 15)* // retorna 16

Voltando ao exemplo dos produtos, desta vez quero trazer o maior valor, o mais caro:

*var precoTubaina = 3.00*

*var precoGuarana = 3.50*

*Math.max(precoTubaina, precoGuarana)* // retorna 3.50 (precoGuarana)

## Entre as *funções nativas* da linguagem JS, temos algumas funções que trabalham exclusivamente com o tipo de dado *String*!

**String.repeat()**

A função .repeat() é utilizada para repetir uma string. Para utilizar basta chamar a função logo após a string e passar por parâmetro quantas vezes a string deve se repetir:

*"Azul" .repeat(3)* // retorna "AzulAzulAzul"

Também pode ser utilizada com variável pré definida:

*var bomDia = "Bom dia!"*

*bomDia.repeat(3)* // retorna "Bom dia! Bom dia! Bom dia!"

----

**String.toUpperCase()**

A função .toUpperCase() modifica a string e converte todos os caracteres para letras maiúsculas:

*var bomDia = "Bom dia"*

*bomDia.toUpperCase()* // retorna "BOM DIA"

