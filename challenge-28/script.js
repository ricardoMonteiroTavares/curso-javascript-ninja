 /*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."
  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */
(function(DOM, HTMLResponse, Connection){
    'use strict';
    var connect = new Connection('https://ws.apicep.com/cep/');
    var $lines = new DOM('div.line');

    var $submit = new DOM("button[type='submit']");

    var $input = new DOM("input[type='text']");
    var cep;
    function request(e){
      e.preventDefault();
      var value = $input.get(0).value;
      if(value.match(/\D/g)){
        throw new Error("Contém caracteres diferentes de digitos");
      }
      console.log(value);
      value = value.slice(0, -3) + "-" + value.slice(-3) + ".json";
      cep = value.slice(0,-5);
      console.log(value);
      $lines.setInnerHTML(1, HTMLResponse.onLoading(value.slice(0,-5)))
      connect.get(value, result);
    }

    function result(val){
      if(val.status === 200){
        $lines.setInnerHTML(1, HTMLResponse.onSuccess(val));
      }else{
        $lines.setInnerHTML(1, HTMLResponse.onError(cep))
      }
      console.log(val);
    }

    $submit.on("click", request);

   

})(window.DOM, window.HTMLResponse, window.Connection);