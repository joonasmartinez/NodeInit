const EventEmitter = require('events'); // EventEmitter requer modulo events
const fs = require('fs'); //Trabalhar com arquivos do sistema.
const path = require('path');

const emitter = new EventEmitter(); //EventEmitter é uma Classe do modulo e 'emitter' agora é uma instancia de EventEmitter (Traz Atributos e Métodos).

emitter.on('log', (message)=>{
    fs.appendFile(path.join(__dirname, 'log.txt'), message, err=>{
        if (err) throw err
    });
})
function log(message){
    emitter.emit('log', message);
}
module.exports = log;