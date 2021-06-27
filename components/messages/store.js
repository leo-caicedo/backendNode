const db = require('mongoose');
const Model = require('./model');
const { config } = require('../../config');


db.Promise = global.Promise
db.connect(config.dbHost, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
  .then(() => console.log('[db] Conectada con éxito'))
  .catch(err => console.error('[db]', err));


const addMessage = (messages) => {
    //list.push(messages);
    const myMessage = new Model(messages);
    myMessage.save();
}

const getMessages = async (filterUser) => {
    let filter = {};
    if (filterUser !== null) {
        filter = { user: filterUser }
    }
    const messages = await Model.find(filterUser)
    return messages;
}

const updateText = async (id, messages) {
    const foundMessages = await Model.findOne({
        _id: id
    });

    foundMessages.messages = message;

    const newMessage = await foundMessages.save();
    return newMessage;
}

const removeMessages = (id) => {
    return Model.deleteOne(
        _id: id,
    );
}

module.exports = {
    add: addMessage,
    list: getMessages,
    updateText: updateText,
    remove: removeMessages,
}
