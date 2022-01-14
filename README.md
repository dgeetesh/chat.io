# chat.io
```bash
const chatIO = require('socket-chat.io');
```bash
# Steps to setup chat socket on server (nodejs)
```bash
# Install Express
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const chatIO = require('chat.io');
// For Setup Socket connection
global.io;
global.socket;
(async function () {
    io = await chatIO.socketSetup(http);
    // for connection event
    socket = await chatIO.socketIoConnection(io, {});
    console.log('socket', socket);
})();
// This socket is can be used to emit or listen a event on connection

app.get('/', async function(req, res) {
    socket.emit('first', "firstData");
    res.end(req.url);
})

```bash


This module uses two other main modules that are referred to, at the end of this page. \
Besides, [**socket.io**](https://socket.io/) tools are utilized for having a better performance.
