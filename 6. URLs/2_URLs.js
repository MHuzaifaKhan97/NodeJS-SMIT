const http = require('http');
const url = require('url');

http.createServer((req,res) => {

    let q = url.parse(req.url,true).query;
    console.log(q);
    let text = `${q.month} ${q.year}`;
    console.log(text);

    res.write(`<h1>${text}</h1>`);
    res.end();

}).listen(8080);