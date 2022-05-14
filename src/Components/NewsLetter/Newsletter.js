import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import db from "../../firebase";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { Alert } from 'bootstrap';

const Newsletter = () => {
    const [input, setInput] = useState("");
    const [message, setMessage] = useState("");
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
            });
            setInput("");
            setMessage("thank you for subscribing");
            setTimeout(() => {
                setMessage("");
            }, 3000);
        }
    };


    return (
        <Container>
            <Row className="text-center mt-5 p-2">
                <Col><h3>CONTACT US</h3></Col>

            </Row>


            <Row className="text-center">
                <Col><h5>Address</h5>
                    <p>H/No: 31 5 (A), Block: A,<br /> Road No: 5, Banasree, Dhaka - 1219</p>
                    <h5>Phone</h5>
                    <p>+880 1796-639528</p>
                    <h5>Email</h5>
                    <p>vibrant360bd@gmail.com</p>
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
                                </Form>
                                {message && <Alert>
                                    {message}
                                </Alert>}
                            </Col>
                        </Row>



                    </Container>
                </Col>
            </Row>


        </Container>
    );
};

export default Newsletter;