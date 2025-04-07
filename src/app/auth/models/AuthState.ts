import { User } from './User';


export type AuthState = {
    user: User | null;
    accessToken: string | null;
    refreshToken: string | null;
    expiresAt: string | null;
    isLoading: boolean;
    error: string | null;
};
