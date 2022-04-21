import React, { FC, useState } from 'react';
import Add from '../components/Add';
import Card from '../components/Card';
import Nothing from '../components/Nothing';
import { useAppSelector } from '../hooks/redux';

interface Props {
    filterActive: boolean;
}


const Jobs: FC<Props> = (props) => {
    const { filterActive } = props;
    const { job } = useAppSelector(state => state.JobReducer);
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);

    return (
        <>
            <section className="jobs">
                {
                    filterActive
                        ?
                        <div className="filter">
                            <div className="form">
                                <div className="form-item"><p>Date from</p><input type="date" /> </div>
                                <div className="form-item"><p>Date to</p><input type="date" /> </div>
                            </div>
                        </div>
                        :
                        <></>
                }
                {
                    job == []
                        ?
                        <div className="jobs-list">
                            {
                                job.map((item) => {
                                    return <Card key={item.id} job={item} />
                                })
                            }
                            <img onClick={handleShow} className="add-icon" src={process.env.PUBLIC_URL + '/icons/add.svg'} alt="" />
                        </div>
                        :
                        <Nothing handleShow={handleShow}/>
                }

            </section>
            <Add handleShow={handleShow} show={show} />

        </>
    );
};

export default Jobs;