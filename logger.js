const EventEmitter = require('events'); // EventEmitter requer modulo events

const emitter = new EventEmitter(); //EventEmitter é uma Classe do modulo e 'emitter' agora é uma instancia de EventEmitter (Traz Atributos e Métodos).

emitter.on('log', (message)=>{
    console.log(message);
})

function log(message){
    emitter.emit('log', message);
}

module.exports = log;