const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

io.on('connection', (socket) => {
    console.log('connection open, ID: ' + socket.id)

    socket.on('files', (data) => {
        io.emit('files', data)
    })

    socket.on('disconnect', () => {
        console.log('connection close, ID: ' + socket.id)
    })
})

http.listen(3000, () => {
    console.log('Listening Port: 3000')
})