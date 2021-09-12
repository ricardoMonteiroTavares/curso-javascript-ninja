(function(win, doc){
    'use strict';

/*
O desafio de hoje será um pequeno projeto: um cronômetro!
As regras para criação do cronômetro são as seguintes:
1. Crie um arquivo index.html e adicione esse script a ele;
2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero).
Ele será o nosso cronômetro;
3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset;
4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
cada segundo;
5. Ao clicar em Stop, o cronômetro deve parar de contar;
6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.

Utilize o atributo data-js para nomear o campo e os botões. Você pode
usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
*/
var counter = 0;
var idInterval = -1;
var $startBtn = doc.querySelector('input[crType="start"]');
var $stopBtn = doc.querySelector('input[crType="stop"]');
var $resetBtn = doc.querySelector('input[crType="reset"]');
var $display = doc.querySelector('h3[crType="display"]');
$display.innerHTML = format(counter);
$startBtn.addEventListener("click", start);
$stopBtn.addEventListener("click", stop);
$resetBtn.addEventListener("click", reset);

function start(event){
    event.preventDefault();
    if(idInterval == -1){
        idInterval = win.setInterval(add, 1000);
        console.log("Iniciou");
    }
    
}

function stop(event){
    event.preventDefault();
    if(idInterval != -1){
        win.clearInterval(idInterval);
        idInterval = -1;
        console.log("Parou");
    }
    
}

function reset(event){
    event.preventDefault();
    counter = 0;
    $display.innerHTML = format(counter);
    console.log("Resetou")
}

function add(){
    $display.innerHTML = format(++counter);
}

function format(val) { return val + " seg";}

})(window, document);