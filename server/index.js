require('dotenv').config();
const express = require('express');
const makePostCall = require('./utils/makePostCall');

module.exports = (app = express(), options = {}) => {
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        next();
    });

    // Fetch data from this endpoint
    app.all('/myDataEndpoint', (req, res) => {
        const body = req.body;
        // Mirror data back, first adding a 'result' property
        body.result = 'request handled';
        res.json(body);
    });

    // Go to this url in the browser: http://localhost:8020/myPageEndpoint
    app.all('/myPageEndpoint', (req, res) => {
        res.send('Hello World');
    });

    // Make genuine API calls (if necessary env vars exist)
    app.all('/originKeys', (req, res) => {
        return makePostCall(res, req.body, 'originKeys');
    });

    app.all('/paymentMethods', (req, res) => makePostCall(res, req.body, 'paymentMethods'));
    //

    //const port = process.env.PORT || '8020';
    // app.listen(port, () => console.log('Listening on port', port));

    return app;
}