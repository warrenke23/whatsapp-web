const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
    console.log('Scan this QR with your WhatsApp.');
});

client.on('ready', () => {
    console.log('WhatsApp bot is ready!');
});

client.on('message', msg => {
    if (msg.body === '!hi') {
        msg.reply('Hello from your bot!');
    }
});

client.initialize();
