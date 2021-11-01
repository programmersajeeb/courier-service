import React from 'react';
import './Footer.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>

            <div>
                <Navbar className='footer-bg' variant="dark" collapseOnSelect expand="lg">
                    <Container>
                        {/* <Navbar.Toggle /> */}
                        <div className='text-white pt-3 mx-5'><p><small>all 	&copy; righit reserved by developer end</small></p></div>
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link className='text-white' href="#home">Home</Nav.Link>
                            <Nav.Link className='text-white' href="#services">Services</Nav.Link>
                        </Navbar.Collapse>
                        <div className="d-flex justify-content-center">
                            <Nav.Link><i className="fab fa-facebook-square text-white fs-4 "></i></Nav.Link>
                            <Nav.Link><i className="fab fa-twitter-square text-white fs-4 "></i></Nav.Link>
                            <Nav.Link><i className="fab fa-instagram-square text-white fs-4 "></i></Nav.Link>
                        </div>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default Footer;