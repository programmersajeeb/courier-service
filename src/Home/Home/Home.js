import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Order from '../Order/Order';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Order></Order>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;