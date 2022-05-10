import React from 'react';
import { Carousel,Row,Container, Col } from 'react-bootstrap';
import customCss from "./carousel.module.css";

export default function CarouselImagenes() {

  
  return (
      <>
      <Container>
  <Row>
    <Col></Col>
    <Col xs={6}>  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../fotos/_NIC3233.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../fotos/_NIC3260.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../fotos/_NIC3286.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel></Col>
    <Col></Col>
  </Row>
  
</Container>
    

      </>
    
  )
}