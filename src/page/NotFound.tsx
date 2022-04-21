import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <section className="not-found">
            <div className="nothing-content">
                <div className="sad-icon"><img src={process.env.PUBLIC_URL + '/icons/sad-rounded-square-emoticon.svg'} alt="" /></div>
                <p>Not Found Page</p>
                <div className="create-btn"><button onClick={() => navigate("/jobs")}>Go to jobs page</button></div>
            </div>
        </section>
    );
};

export default NotFound;