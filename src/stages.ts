import { initialStage, StageOne } from './stages/stateStages';
import { storage } from './storage';

interface Stage {
	description: string;
	stage: typeof initialStage;
}

export const stages: Stage[] = [
	{
		description: 'Welcome',
		stage: initialStage,
	},
	{
		description: 'Stage 1',
		stage: StageOne,
	},
];

export function setStage({ from }: { from: string }): number {
	storage[from] = {
		stage: 0,
	};

	return storage[from].stage;
}

export function getStage({ from }: { from: string }): number {
	if (storage[from]) {
		return storage[from].stage;
	} else {
		storage[from] = {
			stage: 0,
		};

		return storage[from].stage;
	}
}
