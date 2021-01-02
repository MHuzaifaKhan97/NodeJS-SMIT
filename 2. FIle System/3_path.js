let path = require('path');

// PathName
console.log('__filename: ',__filename);

// DirName
console.log("__dirName: ",__dirname);

//Path Object 
let pathObj = path.parse(__filename);
console.log(pathObj)