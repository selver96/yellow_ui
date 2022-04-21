import $api from "../api";
import { IJob } from "../models/IJob";

export default class JobService {

    static async getJob() {
        return await $api.get<IJob[]>('/v1/data/sync');

    }

    static async addJob(date: string, time: any, distance: any) {
        const header = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',

            }
        }

        const params = new URLSearchParams();
        params.append('date', date);
        params.append('time', time);
        params.append('distance', distance);

        return await $api.post<IJob>('/v1/data/jog', params, header);

    }

    static async updateJob(date: string, time: any, distance: any, jogId: any, userId: string) {
        const header = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',

            }
        }

        const params = new URLSearchParams();
        params.append('date', date);
        params.append('time', time);
        params.append('distance', distance);
        params.append('jog_id', jogId);
        params.append('user_id', userId);

        return await $api.put<IJob>('/v1/data/jog', params, header);

    }
}