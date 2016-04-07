import Promise from 'bluebird';
import r from 'request';

// Use promises instead of node callbacks
const request = Promise.promisify(r);

// Issue a request to the website
export default function (url) {
    return request(url).then(result => result.body);
}
