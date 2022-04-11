import React from 'react';
import img1 from '../../images/3.jpg'
import * as ReactBootstrap from 'react-bootstrap';

function Couple() {
    return (
        <div className='container-lg mt-3'>
            <div className='row'>
                <div className='col-md-4'>
                    <ReactBootstrap.Image fluid src={img1}></ReactBootstrap.Image>
                </div>
                <div className='col-md-4'>
                    <ReactBootstrap.Image fluid src={img1}></ReactBootstrap.Image>
                </div>
                <div className='col-md-4'>
                    <ReactBootstrap.Image fluid src={img1}></ReactBootstrap.Image>
                </div>
            </div>
        </div>
    );
}

export default Couple;