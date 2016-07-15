// Replace exports with 'own Object'

var Greet = function() {
    this.greeting = 'Hello World 3';
    
    this.greet = function ()
    {
        console.log(this.greeting);
    }
}

module.exports = new Greet();