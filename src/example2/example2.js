const fs = require("fs");
const path = require("path");
const {EOL} = require('os');

const log1 = `127.0.0.1 - - [30/Jan/2021:11:11:20 -0300] "POST /foo HTTP/1.1" 200 0 "-" "curl/7.47.0"`;
const log2 = `127.0.0.1 - - [30/Jan/2021:11:11:25 -0300] "GET /boo HTTP/1.1" 404 0 "-" "curl/7.47.0"`;

// async version
fs.writeFile(path.join(__dirname, "async.log"), log1, (err) => {
  if (err) return console.error(err);
});

// async version append
fs.writeFile(path.join(__dirname, "async.log"), log2, { flag: "a" }, (err) => {
  if (err) return console.error(err);
});

// improved version
(async () => {
    await new Promise((resolve, reject) => {
        fs.writeFile(path.join(__dirname, "async.improved.log"), `${log1}${EOL}`, (err) => {
            if (err) {
                reject(err);
                return;
            } 
            resolve();
        });
    });
    await new Promise((resolve, reject) => {
        fs.writeFile(path.join(__dirname, "async.improved.log"), log1, { flag: "a" }, (err) => {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        });
    });
})();