import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footercustom.css';

const Footer = () => {
  return (
    <Container fluid className='mt-5 p-3 bg-grad '>

      <Row className=' p-5  text-center'>
        <Col>Logo</Col>
        <Col>About
          <p>About us</p>
          <p>Contact</p>
          <p>Portfolio</p></Col>
        <Col>Support
          <p>support@example.com</p>
          <p>+61 3 8376 6284</p>
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