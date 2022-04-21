import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IJob } from "../../../models/IJob";

interface JobState{
    job: IJob[];
    isLoading: boolean;
    error: string;
}

const initialState: JobState = {
    job: [] as unknown as IJob[],
    isLoading: false,
    error: ''

}

export const jobSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        job(state){
            state.isLoading = true
        },
        jobSuccess(state, action: PayloadAction<IJob[]>){
            state.isLoading = false;
            state.error = '';
            state.job = action.payload;
        },
        jobError(state, action: PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload;
        },
        success(state){
            state.isLoading = false;
        },
    }
})

export default jobSlice.reducer;