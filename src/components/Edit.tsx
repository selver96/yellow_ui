import React, { FC, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import useInput from '../hooks/input';
import { useAppDispatch } from '../hooks/redux';
import { IJob } from '../models/IJob';
import { updateJob } from '../redux/reducers/jobs/ActionCreators';

interface Props {
    handleShow(): void;
    show: boolean;
    job: IJob;
}


const Edit: FC<Props> = (props) => {
    const dispatch = useAppDispatch();
    const { handleShow, show, job } = props;
    const distance = useInput('');
    const time = useInput('');
    const date = useInput('');

    useEffect(() => {
        if (job) {
            date.setValue(job.date);
            time.setValue(job.time);
            distance.setValue(job.distance);
        }
    }, [])

    const update = () => {
        dispatch(updateJob(date.value, time.value, distance.value, job.id, job.user_id))
        date.setValue('');
        time.setValue('');
        distance.setValue('');
        handleShow()
    }

    return (
        <Modal show={show} className="add-dialog">
            <div className="add-dialog">
                <img onClick={handleShow} className="cancel-icon" src={process.env.PUBLIC_URL + '/icons/cancel.svg'} alt="" />
                <div className="add-form">
                    <div className="add-form-item"><strong>Distance</strong><input type="text" {...distance} /></div>
                    <div className="add-form-item"><strong>Time</strong><input type="text" {...time} /></div>
                    <div className="add-form-item"><strong>Date</strong><input type="date" {...date} /></div>
                    <button className="save-btn" onClick={update}>Update</button>
                </div>
            </div>
        </Modal>
    );
};

export default Edit;