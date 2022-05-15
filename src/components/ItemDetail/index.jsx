import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount';
import Button from 'react-bootstrap/Button';
import {Card, Container, Row, Col} from "react-bootstrap"
import { CartContext } from '../CartContext';

export default function ItemDetail({img,nombre, stock, count,producto, cantidad, id, detalle, talle,setCantidad}) {
 
  const {addToCart} = useContext(CartContext);

  return (
    <>
    <Container>
  <Row>
    <Col>
    
     <Card key={id} style={{ width: '20rem' }}>
   
   <Card.Img variant="top" alt= {id} src={img} />
   <Card.Body>
     <Card.Title>{nombre}</Card.Title>
     <Card.Text>
       {detalle}
     </Card.Text>
     <Card.Text>
       {talle}
     </Card.Text>
     
     {cantidad === 0 ? <ItemCount key={id} stock={stock} count={count} producto={producto} setCantidad={setCantidad}  addToCart={addToCart}/> : <Button as={Link} to="/cart" variant="outline-secondary">Ir al carrito ({cantidad} Productos agregados)</Button>}
   </Card.Body>
 </Card>
 
 </Col>
  </Row>
</Container>
   
  
    </>
  )
};




   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
  
