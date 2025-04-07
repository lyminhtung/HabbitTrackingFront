export type TokenPayload = {
    sub: string; // User ID
    email: string;
    role: string;
    exp: number; // Expiration timestamp
    iat: number; // Issued at timestamp
};
