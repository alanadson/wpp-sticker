import qrcode from 'qrcode-terminal';
import whatsappApi from 'whatsapp-web.js';
import { startHandler } from './utils/startHandlers';
const fs = require('fs');

const { Client, LocalAuth } = whatsappApi;

const clientOptions = {
	authStrategy: new LocalAuth(),
	puppeteer: {
		executablePath:
			'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
		args: ['--no-sandbox', '--disable-setuid-sandbox'],
	},
};

const client = new Client(clientOptions);

client.on('loading_screen', (percent: number, message: string) => {
	console.log('LOADING SCREEN', percent, message);
});

client.on('qr', (qr: string) => {
	qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
	console.log('Client is ready');
	startHandler(client as any);
});

client.initialize();
