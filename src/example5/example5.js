const fs = require('fs');
const path = require('path')
const { Transform } = require('stream');

const readStream = new fs.ReadStream(path.join(__dirname, './access.log'), 'utf8');

const transformStream = new Transform({
   transform(chunk, encoding, callback) {

       const transformedChunk = chunk.toString().replace(/127.0.0.1/g, '');

       this.push(transformedChunk);
       callback();
   }
});
 
readStream.pipe(transformStream).pipe(process.stdout);