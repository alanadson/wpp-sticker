interface UserStorage {
	locked?: boolean;
	stage: number;
}

export const storage: { [key: string]: UserStorage } = {};
