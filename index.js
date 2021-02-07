const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);


const PORT = 3005;
const HOST ='localhost'

server.listen(PORT, HOST, () => {
    console.log(`Listening at http://${HOST}:${PORT}`);
})