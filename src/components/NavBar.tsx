import React from 'react';
import { NavLink } from "react-router-dom";
import { useAppSelector } from '../hooks/redux';

const NavBar = () => {
    const { isAuth } = useAppSelector(state => state.UserReducer);

    return (
        <ul className="nav">
            <li>
                <NavLink to="/jobs" className='link'>
                    JOBS
                </NavLink>
            </li>
            <li>
                <NavLink to="/info" className='link'>
                    NFO
                </NavLink>
            </li>
            <li>
                <NavLink to="/contact-us" className='link'>
                    CONTACT US
                </NavLink>
            </li>
        </ul>
    );
};

export default NavBar;