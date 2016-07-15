'use strict';

// Behind this scene it's creating function constructor and setting prototype inheritance.
// Class is syntactic sugar.
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    // Anything that is not defined in the constructor is added to prototype inheritance.
    greet() {
        console.log('hello ' + this.firstName + ' ' + this.lastName);
    }
}

var john = new Person('John', 'Doe');

var jane = new Person('Jane', 'Doe');

john.greet();
jane.greet();