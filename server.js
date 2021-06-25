const express = require('express');
const router = express.Router();

var app = express();
app.use(router);

router.get('/message', (req, res) => {
    res.send('Hola desde GET');
});
router.post('/message', (req, res) => {
    res.send('Añadiendo mensajes');
});

app.listen(3000);
console.log('Server listening on port 3000');
