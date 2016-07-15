var util = require('util');

function Person() {
    this.firstName = 'John';
    this.lastName = 'Doe';
}

Person.prototype.greet = function() {
    console.log('Hello ' + this.firstName + ' ' + this.lastName);
}

function Policeman() {
    Person.call(this); // This calls the parent class's constructor allowing to use properties defined on child.
    this.BadgeNumber = '1001';
}

util.inherits(Policeman, Person);

var officer = new Policeman();

officer.greet();
