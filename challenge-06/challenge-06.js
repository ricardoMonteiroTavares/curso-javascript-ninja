/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = "Campeonato Carioca"; // Campeonato Carioca

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ["Flamengo", "Fluminense", "Vasco", "Botafogo", "Volta Redonda"];

console.log( 'Times que estão participando do campeonato:', teams );

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
// ?
function showTeamPosition(pos){
  if(pos < teams.length && pos >= 0){
    return "O time que está em " + (pos + 1) + "º lugar é o " + teams[pos] + ".";
  }
  return "Não temos a informação do time que está nessa posição.";
}
/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
console.log(showTeamPosition(1)); // O time que está em 2º lugar é o Fluminense.
console.log(showTeamPosition(3)); // O time que está em 4º lugar é o Botafogo.
console.log(showTeamPosition(2)); // O time que está em 3º lugar é o Vasco.
console.log(showTeamPosition(5)); // Não temos a informação do time que está nessa posição.
console.log(showTeamPosition(8)); // Não temos a informação do time que está nessa posição.

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var i = 20;
while(i <= 30){
  console.log(i++);
}
/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
function convertToHex(nameColor){
  var hexa;
  switch(nameColor.toLowerCase()){
    case "white": {
      hexa = "#FFFFFF"; break;
    }
    case "black": {
      hexa = "#000000"; break;
    }
    case "red": {
      hexa = "#FF0000"; break;
    }
    case "yellow": {
      hexa = "#FFFF00"; break;
    }
    case "green": {
      hexa = "#00FF00"; break;
    }
    default: {
      return "Não temos o equivalente hexadecimal para " + nameColor + "."
    }
  }
  return "O hexadecimal para a cor " + nameColor + " é " + hexa + ".";
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
console.log(convertToHex("yellow")); // O hexadecimal para a cor yellow é #FFFF00.
console.log(convertToHex("blue")); // Não temos o equivalente hexadecimal para blue.
console.log(convertToHex("red")); // O hexadecimal para a cor red é #FF0000.
console.log(convertToHex("white")); // O hexadecimal para a cor white é #FFFFFF.
console.log(convertToHex("cyan")); // Não temos o equivalente hexadecimal para cyan.
console.log(convertToHex("black")); // O hexadecimal para a cor black é #000000.
console.log(convertToHex("purple")); // Não temos o equivalente hexadecimal para purple.
console.log(convertToHex("brown")); // Não temos o equivalente hexadecimal para brown.
