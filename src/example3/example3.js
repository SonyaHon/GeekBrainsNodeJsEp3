const fs = require('fs');
const path = require('path');

const stream = fs.createReadStream(path.join(__dirname, 'access.log'));
stream.on('data', (chunk) => {
    console.log(chunk);
});

// (async () => {
//     for await (const chunk of stream) {
//         console.log(chunk);
//     }
// })();

// const file = fs.readFileSync(path.join(__dirname, 'access.log'), 'utf-8');
// console.log(file);