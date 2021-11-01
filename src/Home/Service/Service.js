import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { _id, name, img, discription } = props.service;
    return (
        <div className='col-md-3 col-sm-6 col-12 service-area'>
            <div className="service-card">
            <img className='service-img' src={img} alt="" />
            <h2> {name}</h2>
            <p className='service-discription'>{discription}</p>
            <Link to={`/Booking/${_id}`}>
                <button className='btn btn-primary service-btn'>View {name.toLowerCase()}</button>
            </Link>
            </div>
        </div>
    );
};

export default Service;