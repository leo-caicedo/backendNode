//Network

const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', (req, res) => {
    console.log(req.headers);
    //res.send('Hola desde GET');
    response.success(req, res, 'Vamos con toda!!! Si pude con Django, Nodejs es pan comido :)');
});
router.post('/', (req, res) => {
    controller.addMessage(req.body.user, req.body.messages)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201); 
        })
        .catch(err => {
            response.error(req, res, 'Información invalida', 400, 'Error de controlador'); 
        });
});

module.exports = router;
