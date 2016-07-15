var fs = require('fs');

// 1KB = 1024 bytes
// highWaterMark is a option to set the buffer size
var readStream = fs.createReadStream(__dirname + '/greet.txt', { encoding: 'utf8', highWaterMark: 16 * 1024 });

var writeStream = fs.createWriteStream(__dirname + '/greetCopy.txt');

// the 'data' event is emitted by the read stream every time it reads a chunk of data according to the buffer size.
readStream.on('data', function(chunk) {
    writeStream.write(chunk);
});