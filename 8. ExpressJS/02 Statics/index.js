const express = require('express');

const app = express();

const users = [
    {id:1,name:'Huzaifa'},
    {id:2,name:'Waleed'},
    {id:3,name:'Abubakar'},
]
app.set('port', process.env.PORT || 3000 );

app.get('/',(req,res) => {
    res.send("Hello From ExpressJS");
})

// express.static means this public directory is available for anyone.
app.use('/public',express.static(__dirname+'/public'));

app.get('/users',(req,res) => {
    res.json(users);
})

app.listen(app.get('port') ,()=> {
    console.log(`Express project is run on localhost://${app.get('port')}`);
});