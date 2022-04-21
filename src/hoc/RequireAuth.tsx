import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';

const RequireAuth = ({ children } : any) => {
    const { isAuth } = useAppSelector(state => state.UserReducer);

    useEffect((): any => {
        if(!isAuth){
            return <Navigate to="/"/>
        }

    }, []);
    

    return (
        isAuth
            ?
        children
        :
        <Navigate to="/" />
    ); 
};

export default RequireAuth;