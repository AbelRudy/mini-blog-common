import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { UnauthorizedError } from "../errors/unauthorized-error";

export interface UserPayload {
	id: string;
	email: string;
	pseudo: string;
	refreshToken: string;
}

declare global {
	namespace Express {
		interface Request {
			currentUser?: UserPayload;
		}
	}
}

export const verifyAccessToken = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { token } = req.cookies;

	if (!token) {
		throw new UnauthorizedError("Access token required");
	}

	try {
		const user = jwt.verify(
			token,
			process.env.JWT_KEY!
		) as UserPayload;
		req.currentUser = user;
		next();
	} catch (error) {
		// Token is either expired or invalid
		throw new UnauthorizedError("Access token invalid or expired");
	}
};
