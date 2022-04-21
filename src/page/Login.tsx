import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { login } from '../redux/reducers/auth/ActionCreators';

const Login = () => {
    const dispatch = useAppDispatch();
    let navigate = useNavigate();
    const { isAuth } = useAppSelector(state => state.UserReducer);

    const loginHandler = () => {
        dispatch(login());
    }
    
    useEffect(()=>{
        if(isAuth){
            navigate('/jobs');
        }
        
    }, [isAuth])
    return (
        <section className="login">
            <div className="login-content">
                <div className="bear-face"><img src={process.env.PUBLIC_URL + '/icons/bear-face.svg'} /></div>
                <div className="bear-face-mobile"><img  src={process.env.PUBLIC_URL + '/icons/bearFace.png'} /></div>
                <div className="let-me-in-btn"><button onClick={loginHandler}><p className="Let-me-in">Let me in</p></button></div>
            </div>
        </section>
    );
};

export default Login;