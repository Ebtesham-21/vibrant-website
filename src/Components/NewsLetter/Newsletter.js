import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import db from "../../firebase";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const Newsletter = () => {
    const [input, setInput] = useState("");
    const inputHandler = (e) => {
        setInput(e.target.value);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        if (input) {
            console.log(input);
            //add to firebase
            db.collection("emails").add({
                email: input,
                time: firebase.firestore.FieldValue.serverTimestamp(),
            })
        }
    };


    return (
        <Container>
            <Row className="text-center mt-5 p-2">
                <Col><h3>CONTACT US</h3></Col>

            </Row>


            <Row className="text-center">
                <Col><h5>Address</h5>
                    <p>Addresses</p>
                    <h5>Phone</h5>
                    <p>+00000000</p>
                    <h5>Email</h5>
                    <p>support@vibrant.com</p>
                </Col>
                <Col>
                    <Container className="p-5 m-4">
                        <Row >
                            <Col>Subscribe to our newsletter and get update about our special discounts. </Col>

                            <Col >
                                <Form onSubmit={submitHandler}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">

                                        <Form.Control type="email" onchange={inputHandler} placeholder="email" />


                                    </Form.Group>
                                    <Button variant="secondary" type="submit">Submit</Button>{' '}
                                </Form></Col>
                        </Row>


                        <Row>
                            <Col>

                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>


        </Container>
    );
};

export default Newsletter;