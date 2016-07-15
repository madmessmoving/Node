// passing the constructor instead of the object

var Greet = function() {
    this.greeting = 'Hello World 4';
    
    this.greet = function ()
    {
        console.log(this.greeting);
    }
}

module.exports = Greet;