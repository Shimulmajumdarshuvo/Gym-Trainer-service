import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <>
            <Navbar className='navbar-part text-info' collapseOnSelect expand="lg" sticky='top' >
                <Container className='nav-bar '>
                    <Navbar.Brand as={Link} to="/">
                        <img width={180} src="http://html.tonatheme.com/2020/stayfitn/images/logo.png" alt="" />

                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto  ">
                        </Nav>
                        <Nav className='text'>
                            <Nav.Link className='text-white' href='#home'>Home</Nav.Link>
                            <Nav.Link className='text-white' href='#about'>About Us</Nav.Link>
                            <Nav.Link className='text-white' href='#services'>Services</Nav.Link>
                            <Nav.Link className='text-white' href='#courses'>Courses</Nav.Link>
                            <Nav.Link className='text-white' href="#experience">Experience</Nav.Link>

                            <Nav.Link className='text-white' as={Link} to="/blogs">Blogs</Nav.Link>
                            <Nav.Link className='text-white' href="#contact">Contact</Nav.Link>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;