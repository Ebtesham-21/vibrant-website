import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Dream from "../../Images/ConstructYourDreamArtboard 1.png";

const Banner = () => {
    return (
        <Container id="GETSTARTED">
            <Row className='mt-5 ms-5'>
                <Col xs={12} md={6} className='mt-5' ><h1>Construct your  <br /> DREAM</h1>
                    <p>We are your partner for your innovative and successful future.<br /> We deliver service with The latest ideas and technologies that will <br /> help enrich your goal in business.</p>
                    <Button variant="secondary">Get Started</Button>{' '}
                </Col>
                <Col xs={12} md={6} className='mt-5 img-fluid'><img className="img-fluid" src={Dream} alt="Imge man and girl" /></Col>
            </Row>

        </Container>

    );
};

export default Banner;