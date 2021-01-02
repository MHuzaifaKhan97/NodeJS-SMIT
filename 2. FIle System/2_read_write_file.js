let fs = require('fs');

function readFile(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        (err) ? console.log("Error: ", err) : console.log("Data: ", data)
    })
}

function writeFile(path, data) {
    fs.writeFile(path, data, (err) => {
        (err) ? console.log("Write Error: ", err) : console.log("Write Success");
    })
}

function appendFile(path, data) {
    fs.appendFile(path, data, (err) => {
        (err) ? console.log("Append Error: ",err) : console.log("Append Success")
    })
}

writeFile('./abc.txt',"Hello World From Huzaifa Khan");
readFile('./abc.txt');
appendFile('./abc.txt','Hello From NodeJS too.')