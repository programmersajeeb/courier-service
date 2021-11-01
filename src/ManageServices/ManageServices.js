import React, {useEffect, useState} from 'react';
import './ManageServices.css'
const ManageServices = () => {
    const [services, setServices] = useState([]);
    console.log(services);
    useEffect(() => {
        fetch('https://obscure-coast-41851.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data.services))
    }, []);

    const handleDelete = id => {
        const url = `https://obscure-coast-41851.herokuapp.com/services/${id}`;
        fetch(url, {method: 'DELETE'})
            .then(res => res.json())
            .then(data => {
                console.log(data.services);
                if (data.deletedCount) {
                    alert('Deleted')
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                };

            });
    };
    return (
        <div>
            <h2 className='manage-service-title'>Manage Services</h2>
            
            <div className='row manage-area'>

                {
                    services.map(
                        service => <div key={service._id} className='col-md-3 col-sm-6 col-12'>
                                <div className="manage-card">
                                    <img className='manage-img' src={service.img} alt=""/>
                                    <h2>{service.name}</h2>
                                    <p className='manage-discription'>{service.discription}</p>
                                    <button onClick={() => handleDelete(service._id)}>Delete</button>
                                </div>
                            </div>
                    )
                }

            </div>
        </div>
    );
};

export default ManageServices;