import { Client, Chat, Message } from 'whatsapp-web.js';

export interface Params {
	from: string;
	message: string;
	chat: Chat;
	type: string;
	client: Client;
	fullMessage: Message;
}
