const express = require('express');
const messages = require('../components/messages/network');
const messages = require('../components/users/network');

const routes = (server) => {
    server.use('/messages', messages);
    server.use('/users', users);
}

module.exports = routes;
