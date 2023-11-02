import { Client, Message } from 'whatsapp-web.js';
import { stages, getStage } from '../stages';
import { storage } from '../storage';
import { Params } from '../utils/types';

export function startHandler(client: Client) {
	client.on('message', async (message: Message) => {
		const { from } = message;
		const currentStage = getStage({ from: message.from });

		if ((storage[from] && storage[from].locked) || currentStage === 10) return;

		const chat = await message.getChat();

		const execProps: Params = {
			from: message.from,
			message: message.body,
			chat: chat,
			type: message.type,
			client: client,
			fullMessage: message,
		};
		const messageResponse = await stages[currentStage].stage.exec(execProps);

		if (
			typeof messageResponse === 'string' &&
			(messageResponse as string).trim() !== ''
		) {
			await client.sendMessage(message.from, messageResponse);
			await client.sendSeen(message.from);
		}
	});
}
