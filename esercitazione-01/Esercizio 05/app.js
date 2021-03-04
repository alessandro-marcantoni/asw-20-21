const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('user connect');
    socket.on('disconnect', () => {
        console.log('user disconnect');
    });
    socket.on('chat message', (message) => {
        io.emit('chat message', message);
    });
});

http.listen(3000, () => {
    console.log('Listening on http://localhost:3000');
});