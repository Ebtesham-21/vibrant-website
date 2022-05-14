import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../../Images/logo-white.png';
import './Footercustom.css';

const Footer = () => {
  return (
    <Container fluid className='mt-5 p-3 bg-grad '>

      <Row className=' p-5  text-center'>
        <Col><img width="70px" height="auto" className="img-responsive" src={logo} alt="logo" /></Col>
        <Col>About
          <p>About us</p>
          <p>Contact</p>
          <p>Portfolio</p></Col>
        <Col>Email
          <p> vibrant360bd@gmail.com</p>
          <p>+880 1796-639528</p>
          <p>Services</p></Col>
        <Col>Follow us
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
          <p>Linked-In</p></Col>
      </Row>
    </Container>
  );
};

export default Footer;