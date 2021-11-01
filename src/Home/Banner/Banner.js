import React from 'react';
import { Carousel } from 'react-bootstrap';
import img3 from './../../images/Banner/b3.jpg'
import img1 from './../../images/Banner/b5.jpg'
import img2 from './../../images/Banner/b6.jpg'

const Banner = () => {
    return (
        <>
            <Carousel className='mt-1' id='home'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;