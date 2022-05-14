import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import portfolio1 from "../../Images/53.jpeg";
import portfolio2 from "../../Images/New Year.jpeg";
import portfolio3 from "../../Images/Raw..jpg";
import portfolio4 from "../../Images/Logo (1).png";
import portfolio5 from "../../Images/Christmas for Roxy.jpeg";
import portfolio6 from "../../Images/savlon disinfect ad 1-01.jpeg";
import portfolio7 from "../../Images/post -3 white (1).jpeg";
import portfolio8 from "../../Images/trifold-6.jpeg";
import portfolio9 from "../../Images/wbesite.1.jpg";

const Work = () => {
    return (
        <Container className="text-center mt-5">
            <Row>
                <Col><h3>WORK</h3></Col>
            </Row>
            <Row>
                <Col><h1>Our Work Portfolio</h1></Col>
            </Row>
            <Row>
                <Col><Card style={{ width: '18rem' }}>
                    <Card.Img className="img-thumbnail" src={portfolio1}
                    />

                </Card></Col>
                <Col><Card style={{ width: '18rem' }}>
                    <Card.Img className="img-thumbnail" src={portfolio2}
                    />

                </Card></Col>
                <Col><Card style={{ width: '18rem' }}>
                    <Card.Img className="img-thumbnail" src={portfolio3}
                    />

                </Card></Col>
            </Row>
            <Row>
                <Col><Card style={{ width: '18rem' }}>
                    <Card.Img className="img-thumbnail" src={portfolio4}
                    />

                </Card></Col>
                <Col><Card style={{ width: '18rem' }}>
                    <Card.Img className="img-thumbnail" src={portfolio5}
                    />

                </Card></Col>
                <Col><Card style={{ width: '18rem' }}>
                    <Card.Img className="img-thumbnail" src={portfolio6}
                    />

                </Card></Col>
            </Row>
            <Row>
                <Col><Card style={{ width: '18rem' }}>
                    <Card.Img className="img-thumbnail" src={portfolio6}
                    />

                </Card></Col>
                <Col><Card style={{ width: '18rem' }}>
                    <Card.Img className="img-thumbnail" src={portfolio7}
                    />

                </Card></Col>
                <Col><Card style={{ width: '18rem' }}>
                    <Card.Img className="img-thumbnail" src={portfolio8}
                    />

                </Card></Col>
            </Row>
            <Row>
                <Col><Card style={{ width: '18rem' }}>
                    <iframe width="300" height="300" src="https://www.youtube.com/embed/FGoeYZ6Dqnk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


                </Card></Col>
                <Col><Card style={{ width: '18rem' }}>
                    <iframe width="300" height="300" src="https://www.youtube.com/embed/YaZep8ug7YY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                </Card></Col>
                <Col><Card style={{ width: '18rem' }}><iframe width="300" height="300" src="https://www.youtube.com/embed/OF1xVB50R48" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Card>
                </Col>
            </Row>
            <Row>
                <Col><Card style={{ width: '18rem' }}><iframe width="300" height="300" src="https://www.youtube.com/embed/Np0sEEGxn24" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Card >
                </Col>
                <Col><Card style={{ width: '18rem' }}>
                    <iframe width="300" height="300" src="https://www.youtube.com/embed/ymxbjGed5UA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Card>
                </Col>
                <Col><Card style={{ width: '18rem' }}>
                    <iframe width="300" height="300" src="https://www.youtube.com/embed/DBgOLtgD5GM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Card>
                </Col>
            </Row>

        </Container>
    );
};

export default Work;