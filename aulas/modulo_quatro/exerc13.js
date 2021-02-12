//Uma professora quer ajudar os alunos a decorarem a tabuada do 7 exibindo o resultado para eles! Crie uma função chamada tabuadaDoSete que imprima a tabuada do sete utilizando um loop. O resultado da sua função deve ser:

7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70

//Nesse exercício, não é necessário executar sua função na solução.

function tabuadaDoSete (){
    for(var i = 1; i <= 10; i++){
        console.log('7 x ' + i + ' = ' +7 * i)
    }
}