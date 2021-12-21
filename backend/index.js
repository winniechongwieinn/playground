require('dotenv').config();

const http = require('http');
const app = require('./app');

;(async () => {
    const server = http.createServer(app);
    server.listen(3000, () => {
        console.log(`App listening on port 3000`);
    })
})().catch(err => {
    console.log(err);
})
