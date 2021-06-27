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
        .catch(err => {
            response.error(req, res, 'Unexpected Error', 500, err);
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
router.patch('/:id', (req, res) => {
    controller.update(req.params.id, req.body.messages);
        .then((data) => {
            response.success(req, res, data, 200);
        }) catch(err => {
            response.error(req, res, 'Error Interno', 500, err);
        });
});

module.exports = router;
