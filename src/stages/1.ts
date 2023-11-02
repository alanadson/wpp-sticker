import { Params } from '../utils/types';
import {
	handleError,
	sendStickerUrl,
	sendStickerImage,
	sendStickerVideo,
} from '../utils/mediaHandlers';
import texts from '../utils/texts';

export const StageOne = {
	async exec(params: Params) {
		const { from, message, type, client, fullMessage } = params;
		if (type === 'image') {
			try {
				await client.sendMessage(from, texts.process);
				await sendStickerImage(client, from, fullMessage);
			} catch (err) {
				await fullMessage.reply(texts.sendError);
				handleError(err);
			}
		} else if (type === 'video') {
			try {
				await client.sendMessage(from, texts.process);
				await sendStickerVideo(client, from, fullMessage);
			} catch (err) {
				await fullMessage.reply(texts.sendError);
				handleError(err);
			}
		} else if (message.startsWith('/url ')) {
			const url = message.substring(4);
			if (url) {
				try {
					await client.sendMessage(from, texts.process);
					await sendStickerUrl(client, from, url);
				} catch (err) {
					await fullMessage.reply(texts.sendError);
					handleError(err);
				}
			}
		}

		return;
	},
};
