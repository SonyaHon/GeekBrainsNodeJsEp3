const fs = require("fs");
const path = require("path");

// async version
fs.readFile(path.join(__dirname, "./access.log"), (err, data) => {
  if (err) return console.error(err);
  console.log("Async Buffer:", data);

  console.log("Async String:", data.toString("utf-8"), "\n");
});

// async version with encoding
fs.readFile(path.join(__dirname, "./access.log"), "utf-8", (err, data) => {
  if (err) return console.error(err);
  console.log("Async Encoded read:", data, "\n");
});

// async version errored
fs.readFile(path.join(__dirname, "./not-existing-file"), (err, data) => {
  console.error("Async Error:", err, '\n');
});

// sync version
console.log('Sync version:', fs.readFileSync(path.join(__dirname, './access.log'), 'utf-8'), '\n');

// sync version errored
try {
    fs.readFileSync(path.join(__dirname, "./not-existing-file"), 'utf-8');
} catch(err) {
    console.error('Sync version error:', err, '\n');
}