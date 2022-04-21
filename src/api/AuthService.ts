import $api from "../api";
import { IAuthLogin, IUser } from '../models/IUser';

export default class AutService {

    static async login(uuid: string) {

        const header = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',

            }
        }

        const params = new URLSearchParams();
        params.append('uuid', uuid)

        let response = await $api.post<IAuthLogin>('/v1/auth/uuidLogin', params, header);

        return response;

    }

    static async getUser() {
        return await $api.get<IUser>('/v1/auth/user');

    }
}