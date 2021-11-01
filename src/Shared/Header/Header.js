import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    console.log(user)
    return (
        <>
            <Navbar className='header-bg' variant="dark" sticky='top' collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Fast Gear</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} className='text-white' to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} className='text-white' to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} className='text-white' to="/addService">Add Services</Nav.Link>
                        <Nav.Link as={HashLink} className='text-white' to="/manageServices">Manage Services</Nav.Link>

                        {user?.displayName ?
                            <div onClick={logOut} className="btn btn-secondary">Logout</div>
                            :
                            <Nav.Link as={Link} className='text-white' to="/login">Login</Nav.Link>}

                        <Navbar.Text>
                            Welcome Dear: <a href="#login">{user.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;