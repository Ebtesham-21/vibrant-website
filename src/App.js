import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './Components/Hero/Hero';
import Banner from './Components/Banner-1/Banner';
import Chooseus from './Components/Choose-us/Chooseus';
import Process from './Components/Process/Process';
import Work from './Components/Work/Work';
import Services from './Components/Services/Services';
import Footer from './Components/Shared/Footer/Footer';
import Review from './Components/Reviews/Review';
import Newsletter from './Components/NewsLetter/Newsletter';
import React, { useState } from 'react';
import 'react-chatbot-kit/build/main.css';
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from './theme';
import { Button, Container } from 'react-bootstrap';
import { Nav, Navbar } from 'react-bootstrap';
import '../src/Components/Shared/Navbar/Navigation.css';
import logo from '../src/Images/logo-white.png';
import firebase from 'firebase/compat/app';

import UiComponents from "./UiComponents";
import db from "./firebase";

const StyledApp = styled.div`
color: ${(props) => props.theme.fontColor};

`;

function App() {
  const [theme, setTheme] = useState("light");


  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
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
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>

        <Container>
          <Navbar expand="lg" fixed="top" className="bg-grad" variant="dark">
            <Container>
              <Navbar.Brand href="#home">
                <img
                  alt=""
                  src={logo}
                  width="70px" height="auto"
                  className="d-inline-block align-top"
                />{' '}

              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">

                <Nav className="ms-auto  ">
                  <Nav.Link className="text-white" href="#home">Home</Nav.Link>
                  <Nav.Link className="text-white" href="#features">About</Nav.Link>
                  <Nav.Link className="text-white" href="#pricing">Portfolio</Nav.Link>
                  <Nav.Link className="text-white" href="#pricing">Services</Nav.Link>
                  <Nav.Link className="text-white" href="#pricing">News</Nav.Link>
                  <Nav.Link className="text-white" href="#pricing">Contact us</Nav.Link>
                  <Nav.Link className="text-white" > <Button onClick={() => themeToggler()} variant="primary">☀️ / 🌚</Button>{' '} </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>


        </Container>

        <Hero />


        <Banner />
        <Chooseus />

        <Services />
        <Process />
        <Work />



        <Review />
        <Newsletter />
        <Div className="App">
          <Container>
            <UiComponents />
            <Form onSubmit={submitHandler}>
              <H2>Subscribe to our Newsletter</H2>
              <Input type="email" onChange={inputHandler} value={input} />
              <Button type="submit">Submit</Button>

            </Form>
            {message && <Alert>{message}</Alert>}

          </Container>
        </Div>
        <Footer />
      </StyledApp>
    </ThemeProvider >


  );
}

const Div = styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background: linear-gradient(to right, #414345, #232526 );
overflow: hidden;
`;

const Container1 = styled.div`
  position: relative;
`;
const Form = styled.form`
  position: relative;
  padding: 3rem;
  min-width: 500px;
  border-radius: 5px;
  box-shadow: 0 0 30px #333;
  background: rgba(255, 255, 255, 0.1);
  border: solid 1px rgba(255, 255, 255, 0.2);
  backgroud-clip: padding-box;
  backdrop-filter: blur(10px);
  z-index: 2;
`;
const H2 = styled.h2`
  color: #fff;
  padding: 1rem;
  text-align: center;
  font-size: 2rem;
`;
const Input = styled.input`
  padding: 10px;
  border-radius: 10px 0 0 10px;
  border: none;
  width: 80%;
  outline: none;
  color: #cf1d22;
`;
const Button1 = styled.button`
  background-image: linear-gradient(
    to right,
    #eb3349 0%,
    #f45c43 51%,
    #eb3349 100%
  );
  width: 20%;
  padding: 10px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border-radius: 0 10px 10px 0;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    background-position: right center;
  }
`;
const Alert = styled.p`
  position: relative;
  padding: 0.4rem;
  margin: 0.5rem;
  color: white;
  text-align: center;
  font-size: 1.2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  background: rgba(0, 255, 0, 0.1);
  backdrop-filter: blur(10px);
  z-index: 3;
`;

export default App;
