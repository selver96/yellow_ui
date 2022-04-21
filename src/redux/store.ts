import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserReducer from './reducers/auth/UserSlice';
import JobReducer from './reducers/jobs/JobSlice';


const rootReducer = combineReducers({
    UserReducer,
    JobReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']