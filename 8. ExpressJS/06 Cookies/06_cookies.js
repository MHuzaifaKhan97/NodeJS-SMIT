const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.cookie('myCookie', 'mHuzaifakhan');
    res.send('Cookie Saved');
})

app.get('/removecookie', (req, res) => {
    res.clearCookie('myCookie');
    res.send('Cookie Removed')
})

app.listen(app.get('port'), () => {
    console.log(`Express run on localhost:${app.get('port')}`);
})