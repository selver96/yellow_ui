import JobService from "../../../api/JobService";
import { AppDispatch } from "../../store";
import { jobSlice } from "./JobSlice";

export const getJob = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(jobSlice.actions.job())
        await JobService.getJob().then((response) => {
            dispatch(jobSlice.actions.jobSuccess(response.data));
        })

    } catch (e: any) {
        dispatch(jobSlice.actions.jobError(e.message))
    }
}

export const addJob = (date: string, time: any, distance: any) => async (dispatch: AppDispatch) => {
    try {
        dispatch(jobSlice.actions.job())
        await JobService.addJob(date, time, distance).then((response) => {
            dispatch(jobSlice.actions.success());
        })
        console.log(date);
    } catch (e: any) {
        dispatch(jobSlice.actions.jobError(e.message))
    }
}

export const updateJob = (date: string, time: any, distance: any, jogId: any, userId: string) =>
    async (dispatch: AppDispatch) => {
        try {
            dispatch(jobSlice.actions.job())
            await JobService.updateJob(date, time, distance, jogId, userId).then((response) => {
                dispatch(jobSlice.actions.success());
            })

        } catch (e: any) {
            dispatch(jobSlice.actions.jobError(e.message))
        }
    }