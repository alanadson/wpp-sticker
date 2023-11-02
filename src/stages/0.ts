import { storage } from '../storage';
import { Params } from '../utils/types';
import texts from '../utils/texts';

export const initialStage = {
	async exec(params: Params) {
		const { from, client } = params;
		await client.sendMessage(from, texts.welcome);
		storage[from].stage = 1;

		return;
	},
};
