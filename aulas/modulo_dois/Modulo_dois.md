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

*var minhaVariavel;*

não é o mesmo que

*var MinhaVaraivel;*

JavaScript é uma linguagem que *faz diferença entre MAIÚSCULAS e minúsculas*. Por isso é bom seguir um padrão na hora de escrever os nomes.

As *boas práticas*, embora não sejam *obrigatórias* para que nosso código funcione, irão permitir que ele seja mais fácil de ler e de manter.

----

### ATRIBUIÇÃO DE UM *VALOR*

Quando declaramos uma variável, também podemos ao mesmo tempo atribuir um valor. Fazemos isso com o operador de atribuição.

*var meuApelido = "Harckerman";*

**Nome = O nome vai nos ajudar a identificar nossa variável quando precisarmos usá-la.**

**Atribuição " = "Diz ao JavaScript que queremos salvar o valor à direita na variável à esquerda.**

**Valor = O que vamos salvar em nossa variável. Nesse caso, um texto.**

*A primeira vez* que declaramos uma variável, é que necessária a palavra *var*.

*var meuApelido = "Hackerman";*

Uma vez que a variável já foi declarada, atribuímos valores sem *var*.

*meuApelido = "Zezinho";*

*Nossa variável salvará sempre o último valor atribuído. Isso quer dizer que* se nós atribuirmos um valor a ela novamente, perdemos o anterior.

----

# OS TIPOS DE DADOS

## *'Os tipos de dados permite* que o JavaScript *conheça* as *características* e *funcionalidades* que estarão disponíveis para esses *dados*'.



**NÚMERICOS (NUMBER)**

*var idade = 35; // número inteiro*

*var preco = 150.65; // com decimais*

**CADEIAS DE CARACTERES (string)**

*var nome = "Madero"; // aspas simples*

*var ocupacao = "Mestre dos hambúrgueres";* // aspas duplas tem o mesmo resultado

**LÓGICOS OU BOOLEANOS (boolean)**

*var luzLigada = true;*

*var temFeijoadaNoDomingo = false;*

----

### ARRAYS

Os arrays são coleções de dados. Nós podemos reconhecê-los porque eles são colchetes [].

Nós os mencionamos de uma maneira especial, porque eles são muito comuns em todos os tipos de códigos

*var comidasFavoritas = ["Feijoada", "Pizza", "Filé à parmegiana"]*

*var numerosSorteados = [12, 45, 56, 324, 452];*

**Para acessar um elemento dentro de um array, usamos o operador de índice (que é escrito com colchetes []). Quer dizer: o nome do array e o número da posição que queremos acessar.**

*var numerosSorteados = [12, 45, 56, 324, 452];*

*numerosSorteados[0] // 12*

*numerosSorteados[1] // 45*

----

# USANDO AS VARIÁVEIS

## Sempre que precisar usar uma variável basta usar seu *nome*, e isso vale para *alterar* seu valor!

Substituindo ao Recuperando informações

Uma vez declarada a nossa variável, podemos usá-la de diversas formas, como imprimi-la!

*var nome = "Teodoro"*

*console.log(nome) // imprime "Teodoro"*

**Além de recuperarmos o valor da variável pelo console, podemos alterar o seu valor. Para realizar isso só precisamos chamar o nome da variável seguida do sinal de igual, e o novo valor.**

*var marca = "Nike"*

*console.log(marca) // imprime "Nike"*

*marca = "Adidas"*

*console.log(marca) // imprime "Adidas"*

**A concatenação é a junção de *dois valores* que retornam uma *string***

----

### CONCATENAÇÃO

Serve para unir cadeias de texto. Devolve outra cadeia de texto.

*var nome = "Teodoro";*
*var sobrenome = "Gárcia";*

*var nomeCompleto = nome + " " + sobrenome;*

Se misturamos outros tipos de dados, eles serão convertidos em cadeias de texto.

*var linha = "M";*

*var assento = 7;*

*var localização = linha + assento; // "M7 como string"*