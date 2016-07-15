var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('test', function() {
    console.log('First Event Handler');
});

emtr.on('test', function() {
    console.log('Second Event Handler');
});

emtr.emit('test');