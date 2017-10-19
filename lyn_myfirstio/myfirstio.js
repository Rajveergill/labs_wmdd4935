let fs = require('fs');

let syn = fs.readFileSync(process.argv[2]);


let str = syn.toString();

let content = str.split('\n');

console.log(content.length-1);