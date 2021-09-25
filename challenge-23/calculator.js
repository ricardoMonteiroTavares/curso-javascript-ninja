(function(window){
    'use strict';

    if (typeof Array.prototype.reIndexOf === 'undefined') {
        Array.prototype.reIndexOf = function (rx) {
            for (var i = 0; i < this.length; i++) {
                if (this[i].toString().match(rx)) {
                    return Number.parseInt(i);
                }
            }
            return -1;
        };
    }
        
    

    function Calculator(){
        this.sum = function sum(a, b) {
            return a + b;
        }

        this.subt = function subt(a, b) {
            return a - b;
        }

        this.mul = function mul(a, b) {
            return a * b;
        }

        this.div = function div(a, b) {
            return a / b;
        }

        this.calculate = function calculate(exp){
            if(exp[exp.length - 1].match(/(\+|-|x|\/|Error)/i)){
                return "Error";
            }
            var arr = exp.split(/(\+|-|x|\/)/);

            var index = arr.reIndexOf(/(x|\/)/);
            while(index != -1){
                var char = arr[index];
                var res;
                switch(char){
                    case 'x': {
                        res = this.mul(Number.parseInt(arr[index - 1]),Number.parseInt(arr[index + 1]));
                        break;
                    }
                    case '\/': {
                        var b = Number.parseInt(arr[index + 1]);
                        if(b == 0){
                            return "Error";
                        }
                        res = this.div(Number.parseInt(arr[index - 1]), b);
                        break;
                    }
                }
                arr.splice(index - 1, 3, Number.parseInt(res));
                index = arr.reIndexOf(/(x|\/)/);

            }
            index = arr.reIndexOf(/(\+|-)/);
            while(index != -1){
                var char = arr[index];
                var res;
                switch(char){
                    case '+': {
                        res = this.sum(Number.parseInt(arr[index - 1]), Number.parseInt(arr[index + 1]))
                        break;
                    }
                    case '-': {
                        res = this.subt(Number.parseInt(arr[index - 1]), Number.parseInt(arr[index + 1]))
                        break;
                    }
                }
                arr.splice(index - 1, 3, res);
                index = arr.reIndexOf(/(\+|-)/);

            }

            if(arr.length == 1){
                return arr[0];
            }
        }
    }
    window.Calculator = Calculator;
    
})(window);