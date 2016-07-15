var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    // res.writeHead(200, { 'Content-Type': 'text/plain'});
    // res.end('Hello World!\n');
    
    // Responding with a file
    // res.writeHead(200, {'Content-Type': 'text/html'});
    // var html = fs.readFileSync(__dirname + '/index.htm');
    // res.end(html);
    
    // Using template -- Change data dynamically
    // res.writeHead(200, {'Content-Type': 'text/html'});
    // var html = fs.readFileSync(__dirname + '/indexTemplate.htm', 'utf8'); // get it as a string
    // var msg = 'Hello World...';
    // html = html.replace('{Message}', msg);
    // res.end(html);
    
    // Using Stream
    // Stream is reading a big chunk of data in small portions
    // res = Response is a stream. Create a read stream and pipe it to write to a writeable stream.
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/index.htm').pipe(res);
    
    
    
    
}).listen(1337, '127.0.0.1');