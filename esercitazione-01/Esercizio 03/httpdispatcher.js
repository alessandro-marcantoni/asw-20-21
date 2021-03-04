var HttpDispatcher = function() {
    //Creare uno o più oggetti in modo da contenere tutte le
    //funzioni passate al dispatcher con onGet e onPost.
    //Deve essere possibile, data una request http, chiamare la giusta funzione.

    this.listeners = {get:[], post:[]};
}

HttpDispatcher.prototype.on = function(method, url, callback) {
    //Aggiungere la funzione all'oggetto creato.
    this.listeners[method].push({url, callback});
}

HttpDispatcher.prototype.onGet = function(url, callback) {
    this.on('get', url, callback);
}

HttpDispatcher.prototype.onPost = function(url, callback) {
    this.on('post', url, callback);
}


HttpDispatcher.prototype.dispatch = function(req, res) {
    var parsedUrl = require('url').parse(req.url, true);
    var pathName = parsedUrl.pathname;
    var method = req.method.toLowerCase();

    //Cercare nell'oggetto e chiamare la funzione che corrisponde al
    //metodo della request (get o post) ed al path (/page1, /page2, ...).
    this.listeners[method].forEach((item, index) => {
        if (item.url === pathName) {
            item.callback(req, res);
        }
    });
    
}

module.exports = new HttpDispatcher();
