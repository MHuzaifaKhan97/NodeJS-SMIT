const http = require('http');
const fs = require('fs');

http.createServer((request,response) => {
    console.log("Request: ",request.url);

    fs.readFile("demoFile.html",(err,data) => {
        response.writeHead(200,{'Content-Type':'text/html'});
        response.write(data);
        response.end();
    })
}).listen(3001);