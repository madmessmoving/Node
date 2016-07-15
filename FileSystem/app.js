var fs = require('fs'); // Node module to access file system

// __dirname = is provided by node to get the current directory name.
// this is synchronous command
// if utf8 is not passed, the data will be returned in binary.
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);

// this is a asynchronous file read.
// utf8 is required to tell the encoding, otherwise it returns the buffer with binary data.
var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8',
function(error, data) { // error first callback, where the error object is the first parameter.
    console.log(data);
});

console.log('done');