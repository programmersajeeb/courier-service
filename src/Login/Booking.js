import { useParams, Link } from 'react-router-dom';
import './Booking.css'
import React, { useEffect, useState } from 'react';
// import axios from 'axios';

const Booking = () => {
    const { ServiceId } = useParams();
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/services/${ServiceId}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);


    // const myservice = (name, img, description) => {
    //     console.log(name, img, description);
    //     // axios.post('localhost:9000', name, img, description)
    //     axios.post('https://shielded-spire-53735.herokuapp.com/services', name, img, description)
    //         .then(res => {
    //             console.log(res);
    //             if (res.data.insertedId) {
    //                 alert('add succed')

    //             }
    //         })
    // }


    return (
        <div>
            <div className='booking'>
                <img src={services.img} alt="" />
                <h2>Details of {services.name}</h2>
                <p>{services.discription}</p>
                <Link to='/'>
                    <button className='btn btn-primary'>Go Home</button>
                </Link>
            </div>
        </div>
    );
};

export default Booking;