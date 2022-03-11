import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import './Review.css';

const Review = () => {
    return (
        <Container fluid className='bg-grad p-4 mb-5'  >
            <Carousel className="justify-content-center">
                <Carousel.Item>
                    <Container>
                        <Row className='p-5 ms-2'>

                            <Col><img
                                className="d-block w-50 h-100"
                                src="https://img.freepik.com/free-vector/creative-gradient-profile-icons-collection_23-2149088951.jpg?t=st=1645463013~exp=1645463613~hmac=f70ff76b77d7137f4d64816c79ea9b9412f9d0a4767876b4dbae589e503af4e2&w=826"
                                alt="First slide"
                            /></Col>
                            <Col>
                                <h6>Topic</h6>
                                <h3>Name</h3>
                                <h4>Designation</h4>
                            </Col>
                        </Row>


                    </Container>

                </Carousel.Item>
                <Carousel.Item>
                    <Container>
                        <Row className='p-5 ms-2'>

                            <Col><img
                                className="d-block w-50 h-100"
                                src="https://img.freepik.com/free-vector/creative-gradient-profile-icons-collection_23-2149088951.jpg?t=st=1645463013~exp=1645463613~hmac=f70ff76b77d7137f4d64816c79ea9b9412f9d0a4767876b4dbae589e503af4e2&w=826"
                                alt="First slide"
                            /></Col>
                            <Col>
                                <h6>Topic</h6>
                                <h3>Name</h3>
                                <h4>Designation</h4>
                            </Col>
                        </Row>


                    </Container>

                </Carousel.Item>
                <Carousel.Item>
                    <Container>
                        <Row className='p-5 ms-2'>

                            <Col><img
                                className="d-block w-50 h-100"
                                src="https://img.freepik.com/free-vector/creative-gradient-profile-icons-collection_23-2149088951.jpg?t=st=1645463013~exp=1645463613~hmac=f70ff76b77d7137f4d64816c79ea9b9412f9d0a4767876b4dbae589e503af4e2&w=826"
                                alt="First slide"
                            /></Col>
                            <Col>
                                <h6>Topic</h6>
                                <h3>Name</h3>
                                <h4>Designation</h4>
                            </Col>
                        </Row>


                    </Container>

                </Carousel.Item>
            </Carousel>
        </Container>


    );
};

export default Review;