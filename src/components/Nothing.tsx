import React, { FC, useState } from 'react';

interface Props{
    handleShow(): void;
}

const Nothing: FC<Props> = (props) => {
    const {handleShow} = props;
    return (
        <section className="nothing">
            <div className="nothing-content">
                <div className="sad-icon"><img src={process.env.PUBLIC_URL + '/icons/sad-rounded-square-emoticon.svg'} alt="" /></div>
                <p>Nothing is there</p>
                <div className="create-btn"><button onClick={handleShow}>Create your jog first</button></div>
            </div>
        </section>
    );
};

export default Nothing;