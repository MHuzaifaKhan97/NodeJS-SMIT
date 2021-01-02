let os = require('os');

// Check RAM Memory

let totalMemory = os.totalmem();
let freeMemory = os.freemem();

console.log("Total Memory: ",totalMemory);
console.log("Free Memory: ",freeMemory);