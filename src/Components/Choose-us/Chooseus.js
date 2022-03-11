import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import chooseUs from "../../Images/WhyChooseUsArtboard 1.png";

const Chooseus = () => {
    return (
        <Container>
            <Row className='mt-5 ms-5'>

                <Col xs={12} md={6} className='mt-5 '><img className="img-fluid" src={chooseUs} alt="Imge man and girl" /></Col>
                <Col xs={12} md={6} className='mt-5' ><h1>WHY CHOOSE  <br />  US</h1>
                    <p>We are a 360 tech based agency that creates custom websites, 2D animation, video-content and digital marketing for forward-thinking brands and businesses. With a lot of work experience in this field, we know what it takes to create an effective digital strategy, user-friendly web design, and online marketing to help you stand out from the crowd. The best part is we provide high quality service in very efficient time and expenses.</p>
                    <Button variant="secondary">Get Started</Button>{' '}
                </Col>
            </Row>

        </Container>

    );
};

export default Chooseus;