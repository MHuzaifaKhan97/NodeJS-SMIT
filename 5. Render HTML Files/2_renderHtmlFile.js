const http = require('http');
const fs = require('fs');

const sendFile = (path, res, mime) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            errorHandle(err, res);
            return;
        }
        res.writeHead(200, {
            'Content-Type': mime
        });
        res.end(data.toString());
    });
}

http.createServer((request, response) => {
    if (request.url == '/demoscript.js') {
        sendFile('demoscript.js', response, 'text/javascript');
        return;
    }
    fs.readFile('demofile1.html', function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write(data);
        res.end();
    });
}, 8080)