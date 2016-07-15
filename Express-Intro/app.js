var express = require('express');
var bodyParser = require('body-parser'); // body-parser is a module which helps to access the form body.

var app = express();

var port = process.env.PORT || 3000;

var urlEncodedParser = bodyParser.urlencoded({ extended: false});
var jsonParser = bodyParser.json();

app.set('view engine', 'ejs'); // set the templating/rendering engine. 
                               // by default express looks in a folder called views

// using the static middleware to server static files, ex: css, js, images
app.use('/assets', express.static(__dirname + '/assets'));

// custom middleware
app.use('/', function(req, res, next) {
    console.log('Requested url: ' + req.url);
    next(); // this variable means call the next middleware.
})

app.get('/', function(req, res) {
    // res.send('<html><html><link href=assets/styles.css type=text/css rel=stylesheet /></html><body><h1>Hello World from Express!</h1></body></html>');
    
    res.render('index');
});

app.get('/api', function(req, res) {
    res.json({ firstName: 'John', lastName: 'Doe' });
});

// routing
app.get('/person/:id', function(req, res) {
    // res.send('<html><body>Person is: ' + req.params.id + '</body></html>');
    res.render('person', { ID: req.params.id, Qstr: req.query.qstr }); // querystring: req.query.qsName, qs parsing comes out of the box with express.
});

// this is posting regular form.
app.post('/person', urlEncodedParser, function(req, res) {
    res.send('Thank you');
    console.log(req.body.firstName);
    console.log(req.body.lastName);
});

// this is for posting json post.
app.post('/personjson', jsonParser, function(req, res) {
    res.send('Thank you');
    console.log(req.body.firstName);
    console.log(req.body.lastName);
})

app.listen(port);