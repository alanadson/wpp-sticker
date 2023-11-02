import axios, { AxiosResponse } from 'axios';
import { Message, Client, MessageMedia } from 'whatsapp-web.js';

function handleError(error: unknown) {
	if (error instanceof Error) {
		console.error('error:', error);
	} else {
		console.error('unknown error:', error);
	}
}

async function sendStickerImage(
	client: Client,
	from: string,
	fullMessage: Message
) {
	const media: MessageMedia = await fullMessage.downloadMedia();
	await client.sendMessage(from, media, { sendMediaAsSticker: true });
}

async function sendStickerVideo(
	client: Client,
	from: string,
	fullMessage: Message
) {
	const media: MessageMedia = await fullMessage.downloadMedia();
	await client.sendMessage(from, media, { sendMediaAsSticker: true });
}

async function sendStickerUrl(
	client: Client,
	from: string,
	url: string
): Promise<void> {
	const response: AxiosResponse<ArrayBuffer> = await axios.get(url, {
		responseType: 'arraybuffer',
	});
	const base64Data: string = Buffer.from(response.data).toString('base64');
	const sticker: MessageMedia = new MessageMedia('image/jpeg', base64Data);
	await client.sendMessage(from, sticker, { sendMediaAsSticker: true });
}

export { handleError, sendStickerUrl, sendStickerImage, sendStickerVideo };
