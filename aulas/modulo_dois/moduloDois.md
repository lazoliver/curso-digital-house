# Variáveis

## 'As variáveis são espaços de memória no computador, onde podemos armazenar diferentes tipos de *dados*'.

### TIPOS DE *VARIÁVEL*

Em JavaScript existem dois tipos de variáveis:

   * var

   * let

Para declarar uma variável, escrevemos o tipo e o nome que queremos dar à variável:

   *var nome;*

   *let contador;*

**Vejamos cada parte com mais detalhe...**

----

### DECLARAÇÃO DE UMA *VARIÁVEL*

*var nomeSignificativo;*

**var = a palavra reservada var indicada ao JavaScript que vamos *declarar uma variável*.**

**nome = Só pode ser formado por letras, números e os símbolos $ e_ (sublinhado). *Não pode começar com um número. Não devem conter ñ ou caracteres com acentos*.**

É uma *boa prática* que os nomes das variáveis usem o formato camelCase, como variavelExemplo em vez de variavelexemplo ou variavel_exemplo.

​	*var minhaVariavel;*

não é o mesmo que

​	*var MinhaVaraivel;*

JavaScript é uma linguagem que *faz diferença entre MAIÚSCULAS e minúsculas*. Por isso é bom seguir um padrão na hora de escrever os nomes.

As *boas práticas*, embora não sejam *obrigatórias* para que nosso código funcione, irão permitir que ele seja mais fácil de ler e de manter.

----

### ATRIBUIÇÃO DE UM *VALOR*

Quando declaramos uma variável, também podemos ao mesmo tempo atribuir um valor. Fazemos isso com o operador de atribuição.

​	*var meuApelido = "Harckerman";*

**Nome = O nome vai nos ajudar a identificar nossa variável quando precisarmos usá-la.**

**Atribuição " = "Diz ao JavaScript que queremos salvar o valor à direita na variável à esquerda.**

**Valor = O que vamos salvar em nossa variável. Nesse caso, um texto.**

*A primeira vez* que declaramos uma variável, é que necessária a palavra *var*.

​	*var meuApelido = "Hackerman";*

Uma vez que a variável já foi declarada, atribuímos valores sem *var*.

​	*meuApelido = "Zezinho";*

*Nossa variável salvará sempre o último valor atribuído. Isso quer dizer que* se nós atribuirmos um valor a ela novamente, perdemos o anterior.

----

# OS TIPOS DE DADOS

## *'Os tipos de dados permite* que o JavaScript *conheça* as *características* e *funcionalidades* que estarão disponíveis para esses *dados*'.



### NÚMERICOS (NUMBER)

​	var idade = 35; // número inteiro*

​	*var preco = 150.65; // com decimais*

**CADEIAS DE CARACTERES (string)**

​	*var nome = "Madero"; // aspas simples*

​	*var ocupacao = "Mestre dos hambúrgueres";* // aspas duplas tem o mesmo resultado

**LÓGICOS OU BOOLEANOS (boolean)**

​	*var luzLigada = true;*

​	*var temFeijoadaNoDomingo = false;*

----

### ARRAYS

Os arrays são coleções de dados. Nós podemos reconhecê-los porque eles são colchetes [].

Nós os mencionamos de uma maneira especial, porque eles são muito comuns em todos os tipos de códigos

​	*var comidasFavoritas = ["Feijoada", "Pizza", "Filé à parmegiana"]*

​	*var numerosSorteados = [12, 45, 56, 324, 452];*

**Para acessar um elemento dentro de um array, usamos o operador de índice (que é escrito com colchetes []). Quer dizer: o nome do array e o número da posição que queremos acessar.**

​	*var numerosSorteados = [12, 45, 56, 324, 452];*

​	*numerosSorteados[0] // 12*

​	*numerosSorteados[1] // 45*

----

# USANDO AS VARIÁVEIS

## Sempre que precisar usar uma variável basta usar seu *nome*, e isso vale para *alterar* seu valor!

Substituindo ao Recuperando informações

Uma vez declarada a nossa variável, podemos usá-la de diversas formas, como imprimi-la!

​	*var nome = "Teodoro"*

​	*console.log(nome) // imprime "Teodoro"*

**Além de recuperarmos o valor da variável pelo console, podemos alterar o seu valor. Para realizar isso só precisamos chamar o nome da variável seguida do sinal de igual, e o novo valor.**

​	*var marca = "Nike"*

​	*console.log(marca) // imprime "Nike"*

​	*marca = "Adidas"*

​	*console.log(marca) // imprime "Adidas"*

**A concatenação é a junção de *dois valores* que retornam uma *string***

----

### CONCATENAÇÃO

Serve para unir cadeias de texto. Devolve outra cadeia de texto.

​	*var nome = "Teodoro";*
​	*var sobrenome = "Gárcia";*

​	*var nomeCompleto = nome + " " + sobrenome;*

Se misturamos outros tipos de dados, eles serão convertidos em cadeias de texto.

​	*var linha = "M";*

​	*var assento = 7;*

​	*var localização = linha + assento; // "M7 como string"*

---

# OS OPERADORES

## Os *operadores* nos permitem *manipular o valor* das variáveis, realizar *operações* e *comparar* seus valores

### DE ATRIBUIÇÃO

Atribui o valor da direita na variável da esquerda.

​	*var idade = 35; // Atribuo o número 35 à idade*

### ARITMÉTICOS

Nos permitem fazer operações matemáticas, retornando o resultado da operação.

​	*10 + 15 // Soma -> 25*

​	*10 - 15 // Subtração -> -5*

​	_10 * 15 // Multiplicação -> 150_ 

​	*15 / 10 // Divisão -> 1.5*

​	*15++ // Aumento, é igual a 15 + 1  -> 16*

​	*15 -- // Diminuição, é igual a 15 - 1 -> 14*

​	*15 % 5 // Módulo, o resto de dividir 15 entre 5 -> 0*

​	*15 % 2 // Módulo, o resto de dividir 15 entre 2 -> 1*

O operador de módulo (%) nos retorna o resto de uma divisão.

​	*15 / 3 = 0 e 15 / 2 = 1*

*Os **operadores** aritméticos sempre **retornarão** o **resultado numérico** da **operação** realizada.*

---

# CONDICIONAL IF

## Com as condicionais podemos escrever trechos de código que só executarão se passar por nossa verificação.

### SINTAXE DO IF

Sempre teremos o comando if seguido de parênteses que engloba a condição, depois do fechamento dos parênteses temos abertura e fechamento de chaves que engloba o código que deve ser executado caso a condição seja verdadeira.

​	*if (condição) {*

​		*// código que será executado caso a condição seja verdadeira*

​	*}*

**Exemplo**

Nesse código, a condição verifica se a variável **diaDaSemana** guarda uma variável igual à "quarta-feira", se estiver correto, executa a próxima linha com o comando console.log e imprime a mensagem "Hoje é dia de feijoada!"

Caso a variável tenha um valor diferente do esperado, o código que está entre as chaves será ignorado e a execução continua na linha após o fechamento das chaves.

​	*var diaDaSemana = "quarta-feira"*

​	*if (diaDaSemana == "quarta-feira") {*

​		*console.log("Hoje é dia de feijoada!)*

​	*}*

---

# OS OPERADORES RELACIONAIS

### DE CORAMPARAÇÃO SIMPLES

Compara dois valores, retornando verdadeiro ou falso.

​	*10 == 15 // Igualdade -> False*

​	*10 != 15 // Desigualdade -> True*

### DE COMPARAÇÃO ESTRITA

Compara o valor e o tipo de dado também.

​	*10 === "10" // Igualdade estrita -> False*

​	*10 != 15 // Desigualdade estrita -> True*

No primeiro caso o valor é 10 em ambos os casos, mas os tipos de dados são number e string. Como estamos pedindo que ambas as coisas sejam iguais, o resultado é *false*.

​	*15 > 15 / Maior que -> False*

 	*15 >= 15 // Maior ou igual que -> True*

​	*10 < 15 // Menor que -> True*

​	*10 <= 15 // Menor ou igual que -> True*

*Sempre devemos escrever o símbolo maior (>) o menor (<) antes do igual (>= 0 <=). Se fizermos o contrário (=> 0 =<) JavaScript lê primeiro o operador de atribuição = e então ele não sabe o que fazer com o maior (>) ou o menor (<).*

os *operadores* de *comparação* sempre *retornarão* um booeano, ou seja, *true* ou *false*, como resultado.

---

# CONDICIONAL IF / ELSE

## O comando *else* vem para complementar nossa estrutura do *if*. Ele define um comportamento caso a afirmação seja falsa.

### SINTAXE DO IF / ELSE

O comando *else* complementa o *if*. Veja que devemos colocá-lo logo após o fechamento de chaves do if, e ele tem o próprio bloco de código, também englobando com chaves:

​	*if (condição) {*

​		*// código que será executado caso a condição seja verdadeira*

​	*} else {*

​		*// código que será executado caso a condição seja falsa*

​	*}*

**Exemplo**

Nesse código nós imprimimos uma mensagem de acordo com a condição, considerando a possibilidade de ser verdadeiro (entra no if), ou falso (entra no else)

​	*var diaDaSemana = "terça-feira"*

​	*if (diaDaSemana == "quarta-feira") {*

​		*console.log("Hoje é dia de feijoada!")*

​	*} else {*

​		*console.log("Hoje não é dia de feijoada :(")*

​	*}*

---

# CONDICIONAL ELSE IF

## O comando *ELSE IF* vem para complementar nossa estrutura do *if*. Ele define um segundo ou comportamentos antes do else.

### SINTAXE DO ELSE IF

O comando *else if* tem uma estrutura muito parecida com o *if*. ele leva uma condição seguida de um bloco de código. Vale lembrar que, o *ELSE IF* sempre vem antes do else

​	*if (condição) {*

​		*//código que será executado caso a condição seja verdadeira*

​	*} else if (condição) {*

​		*//segunda condição a ser executada*

​	*else {*

​		//código que será executada caso a condição seja falsa

​	*}*