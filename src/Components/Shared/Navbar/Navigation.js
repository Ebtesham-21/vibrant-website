import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Navigation.css';
import logo from '../../../Images/logo-white.png';

const Navigation = () => {
  return (
    <>
      <Navbar expand="lg" fixed="top" className="bg-grad" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img width="70px" height="auto" className="img-responsive" src={logo} alt="logo" />

          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">

            <Nav className="ms-auto ">
              <Nav.Link className="text-white" href="#home">Home</Nav.Link>
              <Nav.Link className="text-white" href="#features">About</Nav.Link>
              <Nav.Link className="text-white" href="#pricing">Portfolio</Nav.Link>
              <Nav.Link className="text-white" href="#pricing">Services</Nav.Link>
              <Nav.Link className="text-white" href="#pricing">News</Nav.Link>
              <Nav.Link className="text-white" href="#pricing">Contact us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;