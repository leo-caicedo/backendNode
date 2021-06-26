exports.success = (req, res, message, status) => {
    res.status(status || 200).send({
        error: '',
        body: message
    });
}

exports.error = (req, res, error, status, detail) => {
    console.log(`Error: ${detail}`);
    res.status(status || 500).send({
        error: error,
        body: ''
    });
}
