// Data Intensive Realtime Application.

const http = require('http');

let courses = [{ id: 1, name: 'javaScript' }, { id: 2, name: 'NodeJS' }];
let users = ['Huzaifa', 'Waleed']

// let server = http.createServer((request, response) => {

//     console.log('Got a Request: ', request);
//     if(request.url === '/api/user'){
//         response.write(JSON.stringify(users))
//         response.end();
//     }
//     else if(request.url === '/api/courses'){
//         response.write(JSON.stringify(courses))
//         response.end();
//     }else{
//         response.write("<h1>Hello World</h1> \n<h2>"+request.url+"</h2>");
//         response.end();
//     }

// }).listen(3001);

let server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write('Hello World');
        response.end();
    }
    else if (request.url === '/api/courses') {
        response.write(JSON.stringify(courses));
        response.end();
    }
    else if (request.url === '/api/users') {
        response.write(JSON.stringify(users));
        response.end();
    }
    else if (request.url === '/admin') {
        response.write("<html><body><p>This is a body.</p></body></html>");
        response.end();
    }
}).listen(3001)