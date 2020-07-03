const protocol = window.location.protocol;
const host = window.location.host;

export const httpPost = (endpoint, data) =>
fetch(`${protocol}//${host}/${endpoint}`, {
    method: 'POST',
    headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
}).then(response => response.json());