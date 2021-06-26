const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const response = require('./network/response');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

router.get('/message', (req, res) => {
    console.log(req.headers);
    //res.send('Hola desde GET');
    response.success(req, res, 'Vamos con toda!!! Si pude con Django, Nodejs es pan comido :)');
});
router.post('/message', (req, res) => {
    console.log(req.query);
    if (req.query.error == "ok") {
        response.error(req, res, 'Error Simulado', 401); 
    } else {
        response.success(req, res, 'Todo va muy bien :)', 201); 
    }
});

app.listen(3000);
console.log('Server listening on port 3000');
