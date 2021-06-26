//Network

const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', (req, res) => {
    controller.getMessages()
        .then((messageList) => {
            response.success(req, res, messageList, 200);
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error', 500, e);
        });
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
