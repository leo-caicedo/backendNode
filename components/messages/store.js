const list = [];

const addMessage = (messages) => {
    list.push(messages);
}

const getMessages = () => {
    return list;
}

module.exports = {
    add: addMessage,
    list: getMessages,
}
