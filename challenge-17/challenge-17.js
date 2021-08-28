(function() {
    'use strict';
   /*
  1. Envolva todo o conteúdo desse desafio em uma IIFE.
  2. Adicione a diretiva 'use strict';
  3. Crie um arquivo index.html e adicione esse script à ele.
  */
  
  /*
  Em todos os exercícios desse desafio, nós vamos utilizar expressões
  regulares! Para isso, iremos usar o texto abaixo. Coloque-o em uma
  variável chamada `text`:
  "Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de "O Centauro de Luvas", foi um militar, político, abolicionista e monarquista brasileiro."
  */
  var text = "Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de \"O Centauro de Luvas\", foi um militar, político, abolicionista e monarquista brasileiro.";
  
  /*
  Vamos começar com umas brincadeiras fáceis :D
  Troque o nome "Manuel Marques de Sousa" pelo seu nome, e mostre o resultado
  no console:
  */
  var text1 = text.replace(/Manuel Marques de Sousa/g, "Ricardo de Monteiro");
  console.log( 'Adicionando seu nome no texto:' );
  console.log(text1);  
  
  /*
  Agora, substitua a palavra "brasileiro" por sua cidade natal e mostre no
  console.
  Ex: Se você for da São Paulo, substitua por "paulista".
  */
  var text2 = text.replace(/brasileiro/g, "gonçalense");
  console.log( '\nTrocando naturalidade:' );
  console.log(text2);  
  
  /*
  Substitua todos os números por um traço `-`. Cada caractere de número deve
  ser um traço. Mostre o resultado no console:
  */
  var text3 = text.replace(/\d/g, "-");
  console.log( '\nTrocando números por -:' );
  console.log(text3);  
  
  /*
  Substitua todas as letras (somente letras) de "D" maiúsculo até "h"
  minúsculo por "0" (número zero). Mostre o resultado no console:
  */
  var text4 = text.replace(/[DeEfFgGh]/g, "0");
  console.log( '\nTrocando de "D" a "h" por "0":' );
  console.log(text4);  
  
  /*
  Substitua todos os "A" (maiúsculos ou minúsculos) por "4".
  Mostre o resultado no console:
  */
  var text5 = text.replace(/[aA]/g, "4");
  console.log( '\nTrocando "A" e "a" por "4":' );
  console.log(text5);  
  
  /*
  Substitua a frase "O Centauro de Luvas", deixando-a em caixa alta, usando
  o método `toUpperCase()`. Mostre o resultado no console:
  */
  var text6 = text.replace(/(O Centauro de Luvas)/g, function (phrase) {
    return phrase.toUpperCase();
  });
  console.log( '\n"O Centauro de Luvas" em caixa alta:' );
  console.log(text6);  
  
  
  /*
  Agora iremos substituir as datas no formato "13 de junho de 1804" para
  "13/06/1804". A primeira coisa a fazer é criar uma função chamada
  `getMonthNumber`, que irá receber um parâmetro (será o nome do mês) e deverá
  retornar o número correspondente a esse mês.
  Ex: Se o usuário entrar com "março", deve retornar "03" (em string mesmo).
  Números com menos de dois dígitos devem ter um zero na frente.
  Crie então a função e mostre no console os retornos para os meses de março,
  setembro e dezembro.
  Use um console.log para cada mês, usando a frase:
  "O mês de [NOME DO MÊS] é representado pelo número [NÚMERO DO MÊS]."
  */
  function getMonthNumber(month){
      switch(month.toLowerCase()){
          case "janeiro": return "01";
          case "fevereiro": return "02";
          case "março": return "03";
          case "abril": return "04";
          case "maio": return "05";
          case "junho": return "06";
          case "julho": return "07";
          case "agosto": return "08";
          case "setembro": return "09";
          case "outubro": return "10";
          case "novembro": return "11";
          case "dezembro": return "12";
      }
  }
  console.log( '\nMeses representados por números:' );
  console.log("O mês de Agosto é representado pelo número " + getMonthNumber("Agosto") +".");
  
  /*
  Agora, declare uma variável chamada `regexDate` que irá receber a expressão
  regular que irá fazer o match com as datas. Crie grupos de captura para o
  dia, o mês e o ano. Para os meses, você pode fazer o match somente com os
  meses que estão no texto, não precisa adicionar todos.
  Com o que vimos até agora, você consegue fazer :D
  Mostre a regex no console.
  */
  var regexDate = RegExp(/(\d\d)\sde\s([A-Za-zç]{4,9})\sde\s(\d+)/g);
  console.log( '\nRegex que vai fazer o match com as datas do texto:' );
  console.log(regexDate);  
  
  /*
  Agora crie a função que irá fazer o replace dos dados. A função será chamada
  de `replaceDate`. Ela deve retornar a data no formato:
  "[DIA]/[MÊS]/[ANO]"
  Após criar a função, faça o replace das datas no texto, mostrando no
  console o resultado.
  */
  var text7 = text.replace(regexDate,function (phrase) {
      var list = phrase.split(' de ');
      return list[0] + "\\" + getMonthNumber(list[1]) + "\\" + list[2];
  });
  console.log( '\nReplace de datas:' );
  console.log(text7);  
  })();
