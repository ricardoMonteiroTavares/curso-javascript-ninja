(function(doc, win){
    'use strict';

    function DOM(exp){
        this.$elem = doc.querySelectorAll(exp);
    }

    DOM.prototype.on = function on(type, listener){
        this.$elem.forEach(element => element.addEventListener(type, listener));
    }

    DOM.prototype.get = function get() {
        return this.$elem;
    }

    win.DOM = DOM;

})(document, window)