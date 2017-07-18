export class Authorization {
    access_token: string
    token_type: string
    expires_in: number
}
export class Token {
    grant_type: string
    username: string
    password: string
    client_id: string
    client_secret: string
}