const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

router.get('/message', (req, res) => {
    console.log(req.headers);
    res.send('Hola desde GET');
});
router.post('/message', (req, res) => {
    console.log(req.query);
    console.log(req.body);
    res.status(201).send({ body: 'Creado satisfactoriamente' });
});

app.listen(3000);
console.log('Server listening on port 3000');
