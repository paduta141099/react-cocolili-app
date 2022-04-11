import React from 'react';
import img from '../../images/7.jpg';
import * as ReactBootstrap from 'react-bootstrap';

function Carousel() {
    return (
        <div class="">
            <ReactBootstrap.Image fluid src={img}></ReactBootstrap.Image>
        </div>
        
    );
}

export default Carousel;