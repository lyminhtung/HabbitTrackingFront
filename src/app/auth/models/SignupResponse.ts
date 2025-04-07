import { User } from './User';


export type SignupResponse = {
    user: User;
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
};
