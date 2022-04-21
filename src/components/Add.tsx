import React, { FC } from 'react';
import { Modal } from 'react-bootstrap';
import useInput from '../hooks/input';
import { useAppDispatch } from '../hooks/redux';
import { addJob } from '../redux/reducers/jobs/ActionCreators';
interface Props {
    handleShow(): void;
    show: boolean;
}

const Add: FC<Props> = (props) => {

    const dispatch = useAppDispatch();
    const { handleShow, show } = props;
    const distance = useInput('');
    const time = useInput('');
    const date = useInput('');

    const save = () => {
        dispatch(addJob(date.value, time.value, distance.value))
        date.setValue('');
        time.setValue('');
        distance.setValue('');
        handleShow();
    }

    return (
        <Modal show={show} className="add-dialog">
            <div className="add-dialog">
                <img onClick={handleShow} className="cancel-icon" src={process.env.PUBLIC_URL + '/icons/cancel.svg'} alt="" />
                <div className="add-form">
                    <div className="add-form-item"><strong>Distance</strong><input type="text" {...distance} /></div>
                    <div className="add-form-item"><strong>Time</strong><input type="text" {...time} /></div>
                    <div className="add-form-item"><strong>Date</strong><input type="date" {...date} /></div>
                    <button className="save-btn" onClick={save}>Save</button>
                </div>
            </div>
        </Modal>
    );
};

export default Add;