import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';
import NavBar from './NavBar';

interface Props {
  setActive(state: boolean): void;
  filterActive: boolean;
}

const Header: FC<Props> = (props) => {
  const { setActive, filterActive } = props;
  const { isAuth } = useAppSelector(state => state.UserReducer);
  const [burgerOpen, setBurgerOpen] = useState(false);

  return (
    burgerOpen
      ?
      <header className="header-burger">
        <div className="burger-logo-header">
          <img className="logo" src={process.env.PUBLIC_URL + '/icons/logo.png'} />
          <p className="burger-cancel-icon" onClick={() => setBurgerOpen(!burgerOpen)}>x</p>
        </div>
        <ul className="nav-burger">
          <li>
            <NavLink to="/jobs" className='link-burger' onClick={() => setBurgerOpen(!burgerOpen)}>
              JOBS
            </NavLink>
          </li>
          <li>
            <NavLink to="/info" className='link-burger' onClick={() => setBurgerOpen(!burgerOpen)}>
              NFO
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact-us" className='link-burger' onClick={() => setBurgerOpen(!burgerOpen)}>
              CONTACT US
            </NavLink>
          </li>
        </ul>
      </header>
      :
      <>
        <header className="header">
          <img className="logo" src={process.env.PUBLIC_URL + '/icons/logo.svg'} />
          <div>
            {
              isAuth
                ?
                <>
                  <NavBar />
                  {
                    filterActive
                      ?
                      <img onClick={() => setActive(false)} className="filter-icon" src={process.env.PUBLIC_URL + '/icons/filter-active.svg'} />
                      :
                      <img onClick={() => setActive(true)} className="filter-icon" src={process.env.PUBLIC_URL + '/icons/filter.svg'} />
                  }
                </>
                :
                <></>
            }
          </div>
        </header>
        <header className="header-mobile">
          <img className="logo" src={process.env.PUBLIC_URL + '/icons/logo.svg'} />
          
            {
              isAuth
                ?
                <div>
                  {
                    filterActive
                      ?
                      <img onClick={() => setActive(false)} className="filter-icon" src={process.env.PUBLIC_URL + '/icons/filter-active.svg'} />
                      :
                      <img onClick={() => setActive(true)} className="filter-icon" src={process.env.PUBLIC_URL + '/icons/filter.svg'} />
                  }
                  <img className="burger-menu" src={process.env.PUBLIC_URL + '/icons/menu.png'} onClick={() => setBurgerOpen(!burgerOpen)} />
                </div>
                :
                <>
                </>
            }
        </header>
      </>

  );


};

export default Header;