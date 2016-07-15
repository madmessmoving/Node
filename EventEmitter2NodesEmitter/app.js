var Emitter = require('events');
var eventsConfig = require('./eventsConfig').events;

var emtr = new Emitter();

emtr.on(eventsConfig.TEST, function() {
    console.log('First Handler');
});

emtr.on(eventsConfig.TEST, function() {
    console.log('Second Handler');
});

emtr.emit(eventsConfig.TEST);