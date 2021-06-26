//Network

const express = require('express');
const response = require('../../network/response');
const router = express.Router();

router.get('/', (req, res) => {
    console.log(req.headers);
    //res.send('Hola desde GET');
    response.success(req, res, 'Vamos con toda!!! Si pude con Django, Nodejs es pan comido :)');
});
router.post('/', (req, res) => {
    console.log(req.query);
    if (req.query.error == "ok") {
        response.error(req, res, 'Error Simulado', 500, 'Es solo una simulación de los errores'); 
    } else {
        response.success(req, res, 'Todo va muy bien :)', 201); 
    }
});

module.exports = router;
