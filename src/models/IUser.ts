export interface IUser{
    id: string;
    email: string;
    phone: string;
    role: string;
    first_name: string;
    last_name: string;
}

export interface IAuthLogin{
    access_token: string;
    token_type: string;
    expires_in: 0;
    scope: string;
    created_at: 0;
    user: IUser
}