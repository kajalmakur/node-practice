const fs = require('fs');

// Bloking, Sync File read
let txtIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(txtIn);

// Bloking, Sync File update
const txtOut = `Hello World\nupdated on ${Date.now()}`;
fs.writeFileSync('./txt/input.txt',txtOut,'utf-8');

// Async File read
fs.readFile('./txt/input.txt', 'utf-8', (error, data)=>{
    console.log(data);
})

console.log('Read File : ');
console.log('Read File : ');
