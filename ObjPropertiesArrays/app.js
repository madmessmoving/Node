// obj properties and methods

var obj = {
    greet: 'Hello'
};

console.log(obj.greet);
console.log(obj['greet']);

var prop = 'greet';

console.log(obj[prop]);

// functions and arrays

var arr = [];

arr.push(function() {
    console.log('Array Index 0');
});

arr.push(function() {
    console.log('Array Index 1');
});

arr.push(function() {
    console.log('Array Index 3');
});

arr.forEach(function(item) {
    item();
});