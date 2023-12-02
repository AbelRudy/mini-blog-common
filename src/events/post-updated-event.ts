import { Subjects } from "./subjects";

export interface PostUpdatedEvent {
	subject: Subjects.PostUpdated;
	data: {
		id: string;
		authorId: string;
		title: string;
		content: string;
		version: number;
	};										
}
