import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
import db from "./firebase";

const StyledApp = styled.div`
color: ${(props) => props.theme.fontColor};

`;

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
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
                  <Nav.Link className="text-white" > <Button onClick={() => themeToggler()} variant="secondary">Change Theme</Button>{' '} </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>


        </Container>
        <Container className='mt-3 pt-5 float-right '>

        </Container>
        <Banner />
        <Chooseus />
        <Process />
        <Work />

        <Services />
        <Review />
        <Newsletter />
        <Footer />
      </StyledApp>
    </ThemeProvider >


  );
}

export default App;
