import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../../models/IUser";

interface UserState{
    user: IUser;
    isLoading: boolean;
    error: string;
    isAuth: boolean;
}

const initialState: UserState = {
    user: '' as unknown as IUser,
    isLoading: false,
    error: '',
    isAuth: false

}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        user(state){
            state.isLoading = true
        },
        userSuccess(state, action: PayloadAction<IUser>){
            state.isLoading = false;
            state.error = '';
            state.user = action.payload;
        },
        userError(state, action: PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload;
        },
        setIsAuth(state, action: PayloadAction<boolean>){
            state.isAuth = action.payload;
        }
    }
})

export default userSlice.reducer;