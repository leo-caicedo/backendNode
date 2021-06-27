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

const getMessages = async () => {
    //return list;
    const messages = await Model.find()
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

module.exports = {
    add: addMessage,
    list: getMessages,
    updateText: updateText,
}
