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

const getMessages = (filterUser) => {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser));
    });
}

const updateMessages = (id, messages) => {
    return new Promise(async (resolve, reject) => {
        if (!user || !messages) {
            reject('Datos invalidos');
            return false;
        }
        const result = await store.updateText(id, messages);
        resolve(result);
    });
}

const deleteMessages(id) {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject('Id invalido');
            return false;
        }
        store.remove(id);
            .then(() => {
                resolve();
            })
            .catch(err => {
                reject(err);
            })
    });
}

module.exports = {
    addMessage,
    getMessages, 
    updateMessages,
    deleteMessages
};
