const io = require('socket.io-client')
const socket = io.connect('http://localhost:3000')

const form = {
    id: '123-123',
    message: 'hai'
}

socket.emit('files', form)

socket.on('files', (resData) => {
    if(resData.id === form.id) {
        console.log(resData)
        console.log('sama aja')
    } else {
        console.log('beda')
    }
})