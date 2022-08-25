import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import website from "../../Images/WebsiteArtboard 1.png";
import digitalmarketing from "../../Images/DigitalMarketingArtboard 1.png";
import app from "../../Images/AppDevelopmentArtboard 1.png";
import Socialmedia from "../../Images/SocialMediaArtboard 1.png";
import nft from "../../Images/NFTArtboard 1.png";
import branding from "../../Images/BrandingArtboard 1.png";




const Services = () => {
  return (
    <Container id="SERVICES" className="text-center mt-5">
      <Row>
        <Col><h3>SERVICES</h3></Col>
      </Row>
      <Row>
        <Col><h1>WHAT WE CAN PROVIDE</h1></Col>
      </Row>


      <Row>
        <Col><img
          alt=""
          src={website}
          width="100"
          height="100"
          className="d-inline-block align-top"
        />{' '}
          <h3>Web Design </h3>
          <p>We use strategic marketing ideas that have proven effective.
          </p>
        </Col>
        <Col><img
          alt=""
          src={digitalmarketing}
          width="100"
          height="100"
          className="d-inline-block align-top"
        />{' '}
          <h3>Digital Marketing</h3>
          <p>All kinds of social media marketing including social media.</p></Col>
        <Col><img
          alt=""
          src={app}
          width="100"
          height="100"
          className="d-inline-block align-top"
        />{' '}
          <h3>App Development</h3>
          <p>Creating apps well suited for any industry.</p></Col>
      </Row>
      <Row>
        <Col><img
          alt=""
          src={Socialmedia}
          width="100"
          height="100"
          className="d-inline-block align-top"
        />{' '}
          <h3>Social-media Content</h3>
          <p>Want to make your business’s social media more lucrative? We are here to help.</p></Col>
        <Col><img
          alt=""
          src={nft}
          width="100"
          height="100"
          className="d-inline-block align-top"
        />{' '}
          <h3>NFTs/Metaverse  </h3>
          <p>We can make you unique and appealing NFTs.</p></Col>
        <Col><img
          alt=""
          src={branding}
          width="100"
          height="100"
          className="d-inline-block align-top"
        />{' '}
          <h3>Branding</h3>
          <p>A solid brand strategy is the key to helping your company build awareness.</p></Col>
      </Row>

    </Container>
  );
};

export default Services;