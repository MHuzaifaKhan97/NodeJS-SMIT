const EventEmmiter = require('events');

const emmiter = new EventEmmiter();

// Register a Listener

emmiter.on('messageLogged', (arg) => {
    console.log("Listener Called: ", arg);
})

// Raise Event
emmiter.emit('messageLogged', { id: 1, url: 'http://myurl.com' });

setTimeout(() => {
    emmiter.emit('messageLogged', { id: 2, from: 'setTimeout' })
}, 2000);