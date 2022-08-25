import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import chat from "../../Images/ChatIconArtboard 1.png";
import strategy from "../../Images/StrategyArtboard 1.png";
import implementation from "../../Images/ImplementationArtboard 1.png";
import followup from "../../Images/FollowUpArtboard 1.png";


const Process = () => {
  return (
    <Container id="PROCESS" className="text-center mt-5">
      <Row>
        <Col><h3>PROCESS</h3></Col>
      </Row>
      <Row>
        <Col><h1>WE COME UP WITH STRATEGIES VISUALIZING YOUR BUISNESS</h1></Col>
      </Row>
      <Row>
        <Col>
          <Card className='mt-1 bg-secondary ' style={{ width: '10rem' }}>
            <Card.Img variant="top" src={chat} />
            <Card.Body>
              <Card.Title>CHAT</Card.Title>
              <Card.Text>
                We connect with our clients and try to understand what type of service we can provide you.
              </Card.Text>

            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='mt-4 text-black' style={{ width: '10rem' }}>
            <Card.Img variant="top" src={strategy} />
            <Card.Body >
              <Card.Title>STRATEGY BUILD-UP</Card.Title>
              <Card.Text>
                After learning your problems and gaps, we develop the best strategies to fulfill their need and consult with you.
              </Card.Text>

            </Card.Body>
          </Card></Col>
        <Col> <Card className='mt-1 bg-secondary text-white' style={{ width: '10rem' }}>
          <Card.Img variant="top" src={implementation} />
          <Card.Body>
            <Card.Title>IMPLEMENTA-TION</Card.Title>
            <Card.Text>
              We go on with the best possible solution developed in the strategy build-up part and begin to implement the work.
            </Card.Text>

          </Card.Body>
        </Card></Col>
        <Col><Card className='mt-4' style={{ width: '10rem' }}>
          <Card.Img variant="top" src={followup} />
          <Card.Body>
            <Card.Title>FOLLOW UP </Card.Title>
            <Card.Text>
              Finally, we continuously look over if the work is giving results or not and update the strategy when necessary.
            </Card.Text>

          </Card.Body>
        </Card></Col>
      </Row>

    </Container>

  );
};

export default Process;