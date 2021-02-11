//Temos uma lista com nomes de todos os integrantes da família mas esqueceram de colocar o sobrenome! 
//Seu desafio será imprimir nome junto com o sobrenome “Macedo” para cada integrante da família. Mas temos uma exceção, temos um integrante com sobrenome diferente, se tiver algum “Pedro”, coloque o sobrenome “Sousa”.

//Dica: Utilize for  e continue para criar a solução.
//Acrescente um espaço antes do sobrenome, por exemplo: “ Sousa”. 

var familia = ["Joana", "Felipe", "Gabriela", "Carlos", "Pedro", "Bruno"]
for (var i = 0; i < familia.length; i++){
    if(familia[i] == "Pedro"){
        console.log(familia[i] + " Sousa");
            continue}
        console.log(familia[i] + " Macedo")
}