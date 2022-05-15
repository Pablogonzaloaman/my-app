import React from 'react';
import {Card,Container, Row, Col,Button } from 'react-bootstrap';
import customCss from "./Item.module.css";

import { Link } from 'react-router-dom';

export default function Item({id, nombre, precio, img, stock }) {

  
  return (
    <><Container>
    <Row>
      <Col>
    
      <div className={customCss.itemG}>
        <Card key={id} style={{ width: '15rem' }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
              <Card.Title>{nombre}</Card.Title>
              <Card.Text>
               ${precio}
              </Card.Text>
          </Card.Body>
            <Button as={Link} to={`/product/${id}`} variant="dark">Ver Detalle</Button>
        </Card>
      </div>
     
      </Col>
  </Row>
</Container>
    </>
  )
}

