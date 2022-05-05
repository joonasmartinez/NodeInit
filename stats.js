const os = require('os');

const { freemem, totalmem } = os;

console.log(`Livre: ${parseInt(freemem() / 1024 / 1024)} MB`, `Total: ${parseInt(totalmem() / 1024 / 1024)} MB`, `Usage: ${parseInt((freemem/totalmem)*100)}% `);

console.log(`


${JSON.stringify(os.cpus(), null, 2)}`);