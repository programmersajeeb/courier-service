import React, {useEffect, useState} from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [page, setPage]= useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [services, setServices] = useState([]);
    const size = 8;
    useEffect(() => {
        fetch(`https://obscure-coast-41851.herokuapp.com/services?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setServices(data.services);
                const count = data.count;
                const pageNumber = Math.ceil(count/size);
                setPageCount(pageNumber);
            });
    }, [page]);
    return (
        <div className='container'>
            <h2 className='my-5 services-title' id='services'>Our Services</h2>
            <div className='row'>
                {
                    services.map(
                        service => <Service key={service._id} service={service}></Service>
                    )
                }
                <div className="pagination">
                    {
                        [...Array(pageCount).keys()]
                        .map(number=><button className={number === page ? 'selected':''} key={number} onClick={()=> setPage(number)}>{number + 1}</button>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;