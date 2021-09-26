(function(doc, win){
    'use strict';

    function DOM(exp){
        this.$elem = doc.querySelectorAll(exp);
    }

    DOM.prototype.on = function on(type, listener){
        this.getAll().forEach(element => element.addEventListener(type, listener));
    }

    DOM.prototype.getAll = function getAll() {
        return this.$elem;
    }

    DOM.prototype.get = function get(index){
        if(isNaN(index) || typeof(index) != 'number'){
            throw new Error('Index is a not number');
        }else if ( index < 0 || index > (this.$elem.length - 1)){
            throw new Error('Index out of range');
        }
        return this.$elem[index];
    }

    DOM.prototype.setAllInnerHTML = function setAllInnerHTML(val){
        this.getAll().forEach(element => element.innerHTML = val);
    }

    DOM.prototype.setInnerHTML = function setInnerHTML(index, val){
        this.get(index).innerHTML = val;
    }

    win.DOM = DOM;

})(document, window)