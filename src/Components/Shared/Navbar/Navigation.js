import React from 'react';
import './Navigation.css';
import logo from '../../../Images/logo1.PNG'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {  Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const Navigation = () => {
    return (
        <div className="Navigation">
            <Navbar collapseOnSelect expand="lg" /*bg="light" */ >
            <Container>
            <Navbar.Brand href="#home" className="CompanyName d-flex">
                <img
                    src={logo}
                    width="70"
                    height="70"
                    className="d-inline-block align-top"
                    alt="QCare logo"
                />
                <p className="mt-3 ms-1">QCare {" "}
                <span>
                    Hospital
                </span></p>
            </Navbar.Brand>
            {/* <Navbar.Brand href="#home"  >
                </Navbar.Brand> */}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                
                </Nav>
                <Nav >
                <Nav.Link className="Navigation_options" href="#deets">Home</Nav.Link>
                <Nav.Link className="Navigation_options" href="#deets">About Us</Nav.Link>
                <Nav.Link className="Navigation_options" href="#deets">Our Services</Nav.Link>
                <Nav.Link className="Navigation_options" href="#deets">Speciality</Nav.Link>
                <Nav.Link className="Navigation_options" href="#deets">Researchs</Nav.Link>
                <Nav.Link  href="#memes">
                    <Button id="sign_in_button" className="">
                        Sign In
                    </Button>
                </Nav.Link>
                
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;