import { Subjects } from "./subjects";

export interface PostCreatedEvent {
	subject: Subjects.PostCreated;
	data: {
		id: string;
		authorId: string;
		title: string;
		content: string;
		version: string;
	};
}
