import React, { FC, useState } from 'react';
import { IJob } from '../models/IJob';
import Add from './Add';
import { Modal } from 'react-bootstrap';
import Edit from './Edit';

interface Props {
    job?: IJob;
}


const Card: FC<Props> = (props) => {
    const { job } = props;
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);

    return (<>
        <div className="card" onClick={handleShow}>
            <div className='card-image'><img src={process.env.PUBLIC_URL + '/icons/icon.svg'} alt="" /></div>
            {/* <div className="card-body" >
                <div className="card-date"><span>{job.date}</span></div>
                <div className="card-info"><strong>Speed:</strong><p>{job.distance * job.time}</p></div>
                <div className="card-info"><strong>Distance:</strong><p>{job.distance}</p></div>
                <div className="card-info"><strong>Time:</strong><p>{job.time}</p></div>
            </div> */}
        </div>
        {/* <Edit handleShow={handleShow} show={show} job={job}/> */}
    </>
    );
};

export default Card;