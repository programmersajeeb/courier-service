import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../images/404.png'

const NotFound = () => {
    return (
        <div>
            <img style={{ height: '84vh' }} src={img1} alt="" />
            <br />
            <Link to="/">
                <button className='btn-primary'>Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;