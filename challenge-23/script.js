/*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:
- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;
- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/

(function(Calculator, doc){
  'use strict';
  
  var calculator = new Calculator();
  var $display = doc.querySelector("#display");

  function concat(e){
    e.preventDefault();
    var beforeVal = $display.innerHTML;
    var val = e.target.value;
    if(val.match(/(\+|-|x|\/)/) && beforeVal[beforeVal.length-1].match(/(\+|-|x|\/)/)){
      beforeVal = beforeVal.slice(0,beforeVal.length-1) + val;
    }else if(beforeVal === '0' && val.match(/\d/)) {
      beforeVal = val;
    }else{
      beforeVal += val;
    }
    $display.innerHTML = beforeVal;
  }

  function clean(){
    $display.innerHTML = 0;
  }

  function calc(e){
    e.preventDefault();
    $display.innerHTML = calculator.calculate($display.innerHTML);
  }

  clean();

  var $calcBtn = doc.querySelector("input[value='=']");
  var $ceBtn = doc.querySelector("input[value='CE']");

  var $dig0Btn = doc.querySelector("input[value='0']");
  var $dig1Btn = doc.querySelector("input[value='1']");
  var $dig2Btn = doc.querySelector("input[value='2']");
  var $dig3Btn = doc.querySelector("input[value='3']");
  var $dig4Btn = doc.querySelector("input[value='4']");
  var $dig5Btn = doc.querySelector("input[value='5']");
  var $dig6Btn = doc.querySelector("input[value='6']");
  var $dig7Btn = doc.querySelector("input[value='7']");
  var $dig8Btn = doc.querySelector("input[value='8']");
  var $dig9Btn = doc.querySelector("input[value='9']");

  var $sumBtn = doc.querySelector("input[value='+']");
  var $subtBtn = doc.querySelector("input[value='-']");
  var $mulBtn = doc.querySelector("input[value='x']");
  var $divBtn = doc.querySelector("input[value='/']");

  
  $dig0Btn.addEventListener("click", concat);
  $dig1Btn.addEventListener("click", concat);
  $dig2Btn.addEventListener("click", concat);
  $dig3Btn.addEventListener("click", concat);
  $dig4Btn.addEventListener("click", concat);
  $dig5Btn.addEventListener("click", concat);
  $dig6Btn.addEventListener("click", concat);
  $dig7Btn.addEventListener("click", concat);
  $dig8Btn.addEventListener("click", concat);
  $dig9Btn.addEventListener("click", concat);

  $sumBtn.addEventListener("click", concat);
  $subtBtn.addEventListener("click", concat);
  $mulBtn.addEventListener("click", concat);
  $divBtn.addEventListener("click", concat);
  
  $calcBtn.addEventListener("click", calc);
  $ceBtn.addEventListener("click", function (e) {
    e.preventDefault();
    clean();
  });

})(window.Calculator, document);