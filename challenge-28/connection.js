(function(win){
    'use strict'

    function Connection(url){
        this.req = new XMLHttpRequest();
        this.url = url;
    }
    
    Connection.prototype.get = function get(data, callback){
        this.req.open('GET', this.url + data);
        this.req.setRequestHeader('Access-Control-Allow-Origin', '*');
        this.req.onreadystatechange = function (){
            if(this.readyState === XMLHttpRequest.DONE){
                if (typeof callback === "function") {
                    if (this.status === 200) {
                        callback(JSON.parse(this.responseText));
                      } else {
                        callback({status: this.status});
                      }
                
                    
                }
                 
            }
        };
        
        this.req.send(); 
    }

    win.Connection = Connection;

})(window);