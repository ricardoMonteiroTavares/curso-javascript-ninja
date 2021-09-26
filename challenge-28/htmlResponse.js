(function(win){
    'use strict';

    function HTMLResponse(){}

    HTMLResponse.onLoading = function onLoading(val){
        return '<h2>Buscando informações para o CEP ' + val + '...<\/h2>';
    }

    HTMLResponse.onError = function onError(val){
        return '<h2>Não encontramos o endereço para o CEP ' + val + '...<\/h2>';
    }

    HTMLResponse.onSuccess = function onSuccess(resp){
        return '<p> CEP: ' + resp.code + '<\/p>' +
        '<p> Logradouro: ' + resp.address + '<\/p>' +
        '<p> Bairro: ' + resp.district + '<\/p>' +
        '<p> Município: ' + resp.city + '-' + resp.state + '<\/p>';
    }

    win.HTMLResponse = HTMLResponse;
})(window);