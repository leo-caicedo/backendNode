//Network
const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();


router.get('/', (req, res) => {
    const filterMessages = req.query.user || null;
    controller.getMessages(filterMessages)
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

router.delete('/:id', (req, res) => {
    controller.deleteMessages(req.params.id)
        .then(() => {
            response.success(req, res, `Mensaje ${req.params.id} eliminado`, 200);
        })
        .catch(err => {
            response.error(req, res, 'Error interno, intenta más tarde.', 500, error);
        })
});


module.exports = router;
