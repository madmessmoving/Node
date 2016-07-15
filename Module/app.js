// Module
var greet = require('./greet.js');

greet();

// Prototypal Inheritance
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

Person.prototype.sayHello = function() {
    console.log('hello ' + this.firstName + ' ' + this.lastName);
}

var john = new Person('John', 'Doe');
john.sayHello();

// Immediately Invoked Function Exprn

var firstName = 'Jane';

(function() {
    var firstName = 'John';
    console.log(firstName);
 }());
 
 console.log(firstName);