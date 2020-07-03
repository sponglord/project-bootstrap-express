import {httpPost} from './utils/httpPost';

console.log('BOOTSTRAP!!');

httpPost('myDataEndpoint', {data: 'myData'}).then(response => {
    console.log('response=',response)
});

// httpPost('originKeys', {originDomains: [document.location.origin]}).then(response => {
//     console.log('response=',response)
// });