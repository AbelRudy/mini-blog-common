import { Subjects } from "./subjects";

export interface PostDeletedEvent {
	subject: Subjects.PostUpdated;
	data: {
		id: string;
		version: number;
	};
}
