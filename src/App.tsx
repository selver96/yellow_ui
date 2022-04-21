import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import { Routes, Route} from "react-router-dom";
import './css/App.css';
import './css/style.css';
import Info from './page/Info';
import Jobs from './page/Jobs';
import Login from './page/Login';
import { useAppDispatch } from './hooks/redux';
import { userSlice } from './redux/reducers/auth/UserSlice';
import { isAuth } from './redux/reducers/auth/ActionCreators';
import RequireAuth from './hoc/RequireAuth';
import NotFound from './page/NotFound';

function App() {
  const dispatch = useAppDispatch();
  const [filterActive, setFilterActive] = useState(false);

  const setActive = (state: boolean) =>{
      setFilterActive(state);
  }

  useEffect(() => {
    dispatch(isAuth())
  }, [])

  return (
    <div className="App">
      <Header setActive={setActive} filterActive={filterActive} />
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/jobs" element={<RequireAuth><Jobs filterActive={filterActive} /></RequireAuth>} />
        <Route path="/info" element={<RequireAuth><Info setActive={setActive}/></RequireAuth>} />
        <Route path="/contact-us" element={<RequireAuth><Info setActive={setActive}/></RequireAuth>} />
        <Route path="/*" element={<NotFound/>} />
      </Routes>
      
    </div>
  );
}

export default App;
