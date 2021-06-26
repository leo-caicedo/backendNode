const store = require('./store');

const addMessage = (user, messages) => {
    return new Promise((resolve, reject) => {
        if (!user || !messages) {
            console.error('[messageController] NO HAY USUARIO O MENSAJE');
            reject('Los datos son incorrectos');
            return false;
        }
        const fullName = {
            user: user,
            messages: messages,
            date: new Date()
        };
        store.add(fullName);
        resolve(fullName);
    });
}

const getMessages = () => {
    return new Promise((resolve, reject) => {
        resolve(store.list());
    });
}

module.exports = {
    addMessage,
    getMessages, 
};
