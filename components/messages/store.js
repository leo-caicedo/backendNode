const Model = require('./model');

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

const updateText = async (id, messages) => {
    const foundMessages = await Model.findOne({
        _id: id
    });

    foundMessages.messages = message;

    const newMessage = await foundMessages.save();
    return newMessage;
}

const removeMessages = (id) => {
    return Model.deleteOne(
        _id = id
    );
}

module.exports = {
    add: addMessage,
    list: getMessages,
    updateText: updateText,
    remove: removeMessages,
}
