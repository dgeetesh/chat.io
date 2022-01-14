const socketIO = require('socket.io');
const io = socketIO({ serveClient: false });
let _io;
/**
 * 
 * @param {*} server need to pass server and server will be initilized async
 * const app = express();
 * const server = require('http').createServer(app);
 */
async function socketSetup (server, options) {
    io.attach(server, {
        cors: {
          origin: "*",
          methods: ["GET", "POST"]
        },
        pingInterval: options && options.pingInterval || 10000,
        pingTimeout: options && options.pingTimeout || 5000,
        cookie: options && options.cookie || false,
    });
    global._io = io;
    _io = io;
    return io;
}

// make a connection to user and return the socket connection which can be used 
// to emit event as soon as the connection is established
async function socketIoConnection (userIo, options) {
    return new Promise(function (resolve, reject) {
        userIo.on("connection", async (socket) => {
            return resolve(socket);
        });
    });
}

module.exports = { socketSetup, socketIoConnection };