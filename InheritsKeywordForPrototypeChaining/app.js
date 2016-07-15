var Emitter = require('events');
var util = require('util');

var Greeter = function() {
    this.greeting = 'Hello ';
}

// Greeter's prototype now inherits from Event Emitter's prototype properties
util.inherits(Greeter, Emitter);

// If the prototype of Greeter is set before 'inherits', then it'll get overwritten
Greeter.prototype.greet = function(data) {
    console.log(this.greeting);
    this.emit('test', data);
}

var greet1 = new Greeter();

greet1.on('test', function(data) {
    console.log('In test handler ' + data);
});

greet1.greet('parameter data');