var name = 'John Doe';

var test = `Hello ${name}`; // ES 6 template literals

console.log(test);

var obj = {
    name : 'John Doe',
    greeting : function() {
        console.log(`Hello ${ this.name }`);
    }
}

obj.greeting();

obj.greeting.call({ name: 'Jane Doe'}); // ES 6, the parameter to call becomes the 'this' object in greeting func

obj.greeting.apply({ name: 'Share Doe'}); // ES 6, same as call's 'this' object and additional parameters