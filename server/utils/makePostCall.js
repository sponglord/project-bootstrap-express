const { post } = require('request');
const getPostParameters = require('../config/getPostParameters');
const handleCallback = require('../utils/handleCallback');

module.exports = (res, request, endpoint) => {
    const params = getPostParameters(endpoint, request);
    post(params, (error, response, body) => handleCallback({ error, response, body }, res));
};
