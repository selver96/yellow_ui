import AutService from "../../../api/AuthService";
import { AppDispatch } from "../../store";
import { userSlice } from "./UserSlice";

const UUID = '';

export const login = () => async (dispatch: AppDispatch) => {
    try {
        
        dispatch(userSlice.actions.user())
        localStorage.removeItem("access_token");
        localStorage.removeItem("isAuth");
        localStorage.setItem("isAuth", "isAuth");
        await AutService.login(UUID).then((response) => {
            localStorage.setItem("access_token", response.data.access_token);
            localStorage.setItem("isAuth", "isAuth");
            dispatch(userSlice.actions.setIsAuth(true));
            dispatch(userSlice.actions.userSuccess(response.data.user));
        })
        
    }catch (e: any) {
        dispatch(userSlice.actions.userError(e.message))
    }
}

export const isAuth = () => async (dispatch: AppDispatch) => {
    try {
        if (localStorage.getItem('isAuth')) {
            dispatch(userSlice.actions.setIsAuth(true));
            await AutService.getUser().then((response) => {
                dispatch(userSlice.actions.userSuccess(response.data));
            })
        }
        
    }catch (e: any) {
        dispatch(userSlice.actions.userError(e.message))
    }
}