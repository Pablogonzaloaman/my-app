import React from 'react';
import { Carousel,Container } from 'react-bootstrap';


export default function CarouselImagenes() {

  
  return (
      <>
      <Container>    
 <Carousel>
  <Carousel.Item>
    <img 
      className="d-block w-100"
      src="../fotos/sentiteViva.png"
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img 
      className="d-block w-100"
      src="../fotos/2.png"
      alt="Second slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img 
      className="d-block w-100"
      src="../fotos/3erFoto.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

</Container>   
      </>    
  )
}