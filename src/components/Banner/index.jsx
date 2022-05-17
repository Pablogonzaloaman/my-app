import React from 'react';
import {  Row,Container, Col } from 'react-bootstrap';

export default function bannerRedes() {
return (
    <>
    <div className='banner'>        
    <Container>
    <Row>
    <Col > <img style={{ padding: '1rem' }}  className="d-block w-100" src="../fotos/bannerRedes.png" alt="" />  </Col>
    
  </Row>
    </Container>
    </div>
    <div>
    <Container>
  <Row>    
    <Col > <img   className="d-block w-100" src="../fotos/cuotasSinInteres.png" alt="" />  </Col>    
  </Row>
</Container>
    </div>
</>
    
    )
  }