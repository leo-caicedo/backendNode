const express = require('express');
const messages = require('../components/messages/network');

const routes = (server) => {
    server.use('/messages', messages);
}

module.exports = routes;
