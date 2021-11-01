import React from 'react';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div>
            <div className="achievement-main-area">
                <h2>Our Achievement</h2>
                <div className="achievement-content">
                    <div className="achievement-count-area">
                        <div className='count-area'><h4>398</h4><p>Branch</p></div>
                        <div className='count-area'><h4>1,060,000</h4><p>Clients</p></div>
                        <div className='count-area'><h4>2,258</h4><p>Hours Of Support</p></div>
                        <div className='count-area'><h4>13</h4><p>Country Covered</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;