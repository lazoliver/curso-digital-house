//Em uma escola, um professor quer calcular a média de notas dos seus alunos. Ele tem separado em variáveis cada nota dos trabalhos realizados por cada aluno:

var trabalhoDeHistoria = 8.0
var trabalhoDeMatematica = 7.0
var trabalhoDeCiencia = 10
var trabalhoDeGeografia = 9.5

//O professor já sabe que a média é calculada com a soma de todas as notas e dividindo pelo total. Mas ele se perdeu um pouco no código, e precisa da sua ajuda para terminar essa tarefa! 
//Sua missão é ajudar o professor com o seu conhecimento dos operadores aritméticos para calcular a média dos alunos. Atribua na variável media o cálculo matemático para chegar no valor requisitado.
//Lembre-se de fazer o computador calcular por você!

var trabalhoDeHistoria = 8.0;
var trabalhoDeMatematica = 7.0;
var trabalhoDeCiencia = 10.0;
var trabalhoDeGeografia = 9.5
var totalDeTrabalhos = 4;
var notas = trabalhoDeHistoria + trabalhoDeMatematica + trabalhoDeCiencia + trabalhoDeGeografia;
var media = notas / totalDeTrabalhos;
console.log(media)