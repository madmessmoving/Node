var person = {
    firstName: '',
    lastName: '',
    greet: function() {
        return this.firstName + ' ' + this.lastName;
    }
}

var john = Object.create(person);
john.firstName = 'John';
john.lastName = 'Doe';

var jane = Object.create(person);
jane.firstName = 'Jane';
jane.lastName = 'Foe';

john.greet();
jane.greet();