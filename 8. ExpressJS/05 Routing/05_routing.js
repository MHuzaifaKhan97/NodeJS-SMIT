const express = require('express');

const app = express();

const router = express.Router();
const router2 = express.Router();

router.get('/', (req, res) => res.send('API is Live!'))
router.get('/user', (req, res) => res.send('/user calling'))
router.get('/group', (req, res) => res.send('/group calling'))
router.get('/post', (req, res) => res.send('/post calling'))
router2.get('/', (req, res) => res.send('API is Live and Updated...!'))
router.get('*', (req, res) => res.send('What are you looking for?'))


app.use('/apiV1', router);
app.use('/apiV2', router2);
app.use('/users', router)
app.use('/group', router);

router.get('/:username', (req, res) => res.send(JSON.stringify(req.params)))

app.get('/', function (req, res) {
    res.send('Express Works');
});

app.listen(3000, function () {
    console.log(`Express Server Started on: http://localhost:3000`);
});