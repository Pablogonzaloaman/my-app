import React, {useContext} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Badge, Card } from "react-bootstrap";
import customCss from "./index.module.css";
import Button from 'react-bootstrap/Button';
import { CartContext } from '../CartContext';
import { Link } from 'react-router-dom';


export default function CartDetail() {

  const {cart, removeFromCart, buyAll,valorTotal, totalItems} = useContext(CartContext);
  console.log(cart);
  
  console.log(valorTotal);

  return (
    <>
      <h1 className={customCss.text}>Carrito</h1>
      <ListGroup as="ol">
      <div> {cart.length > 0 ? cart.map(item => <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">{item.nombre}</div>
            {item.counter} {item.category} x   $ {item.precio} U
          </div>
         <Card.Img variant="top"style={{ width: '7rem' }}  src={item.img}  />
          <Button variant="outline-secondary" onClick={() => removeFromCart(item.id)}>Eliminar del carrito</Button>
          <Badge bg="primary" pill>
          {item.counter}
          </Badge>
        </ListGroup.Item> ) : <div><Button 
        as={Link} to="/" variant="outline-success">Volver a la tienda</Button> <br/> <h1>Este carrito está vacio</h1></div> }</div>
      </ListGroup>
      { cart.length > 0 && <div>
        <h2 className={customCss.text}>Valor Total : $ {valorTotal}</h2>
        <hr/>
        <h2 className={customCss.text}>Total items: {totalItems}</h2>
        <hr/>
        <Button as={Link} to='/cart/checkout' variant="outline-dark" onClick={() => buyAll()}>Comprar </Button>
        <hr/>
        <Button variant="outline-secondary" onClick={() => buyAll()}>Vaciar carrito</Button>
      </div>}
    </>
  )
}