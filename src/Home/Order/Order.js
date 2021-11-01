import React from 'react';
import './Order.css';

const Order = () => {
    return (
        <div className='section-main-area'>
            <div className='row content-main-area'>
                <div className='col-md-3 content-bg'>
                    <div className='image-area'>
                        <img src="http://sbtechnosoft.com/transcrew/images/features-icon1.png" alt="" />
                    </div>
                    <div className='content-area text-center'>
                        <h2 className='content-title'>Apply Online</h2>
                        <p className='content-discription'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <button>Read More</button>
                    </div>
                </div>
                <div className='col-md-3 content-bg'>
                    <div className='image-area'>
                        <img src="http://sbtechnosoft.com/transcrew/images/features-icon2.png" alt="" />
                    </div>
                    <div className='content-area text-center'>
                        <h2 className='content-title'>Submit Documents</h2>
                        <p className='content-discription'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <button>Read More</button>
                    </div>
                </div>
                <div className='col-md-3 content-bg'>
                    <div className='image-area'>
                        <img src="http://sbtechnosoft.com/transcrew/images/features-icon3.png" alt="" />
                    </div>
                    <div className='content-area text-center'>
                        <h2 className='content-title'>Receive Goods</h2>
                        <p className='content-discription'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <button>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;