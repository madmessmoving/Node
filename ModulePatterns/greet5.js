// Very popular: Revealing Module Pattern.
// Exposing the method and properties you want via returned object.

var greetMsg = 'Hello World, greet5';

var greet = function() {
    console.log(greetMsg);
}

module.exports = {
    greet : greet
};