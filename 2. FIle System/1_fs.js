const { deepStrictEqual } = require('assert');
let fs = require('fs');

// READ DIRECTORIES

// Synchronous

// console.log("Sync 1");
// let file = fs.readdirSync('./'); // blocked I/O if data is more.
// console.log("Sync 2",file);

//Asyncronous

console.log("Async 1");
fs.readdir('./',(err,files) => {
    if(err) {
        console.log("Error: ",err)
    }
    else{
        console.log("Files: ",files)
    }
})
console.log("Async 2");
