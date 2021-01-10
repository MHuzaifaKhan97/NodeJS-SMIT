const express = require('express');

const app = express();

app.set('port', process.env.PORT || 3000);
app.get('/', (req, res) => {
    res.send("Hello From Express");
})
app.listen(3000, () => {
    console.log(`Express Server Stated on ${app.get('port')}`);
})