//Server

const express = require('express');
const bodyParser = require('body-parser');

// Router de mensanjes
const router = require('./network/routes');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
router(app);


app.use('/app', express.static('public'));

app.listen(3000);
console.log('Server listening on port 3000');
