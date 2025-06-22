const http = require('http');

http.createServer(function (req, res) {

    res.writeHead(200, {'Content-type': 'text/plain'});
    res.end('Hello World! Listening from port 2020');

}).listen(2020);