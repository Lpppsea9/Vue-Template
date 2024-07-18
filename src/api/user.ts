import { post } from "@/http/request";

export type LoginRequest = {
	username: string;
	password: string;
};

export type ReLoginRequest = {
	accessToken: string;
};

export type LoginResponse = {
	username: string;
	roles: string[];
	accessToken: string;
};

export const userLogin = async (data?: LoginRequest) => {
	return post<LoginResponse>({}, "/login", data);
};

export const refreshUserInfo = async (data?: ReLoginRequest) => {
	return post<LoginResponse>({}, "/getUserInfo", data);
};