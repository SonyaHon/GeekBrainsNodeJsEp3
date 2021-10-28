const fs = require('fs');
const path = require('path');

const log1 = '127.0.0.1 - - [30/Jan/2021:11:11:20 -0300] "POST /foo HTTP/1.1" 200 0 "-" "curl/7.47.0"';

const writeStream = fs.createWriteStream(path.join(__dirname, './access.log'),  { flags: 'a', encoding: 'utf8' });

writeStream.write(log1);

writeStream.end(() => console.log('File writing finished'));