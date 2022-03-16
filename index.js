
const express = require('express');
const app = express();

const {createClient} = require('redis');

const publisher = createClient();
const subscriber = createClient();

publisher.on('connect', () => console.log('publisher conectado !'));
subscriber.on('connect', () => console.log('subscriber conectado !'));

publisher.connect();
subscriber.connect();

const chat = [];

subscriber.subscribe('chat', (message) => {

    if (!chat.includes(message)) {
        console.log(message);
    }

    chat.push(message);
});


app.get('/enviarMensagem/:user/:message', (req, res) => {

    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    const {user, message} = req.params;

    publisher.publish('chat', `[${hours}:${minutes}:${seconds}] [<${user}>]: <${message}>` );

    res.json({message: 'Mensagem enviada com sucesso !'});

});


app.listen(
    3000,
    () => console.log('Server is running on URL http://localhost:3000 !')
);