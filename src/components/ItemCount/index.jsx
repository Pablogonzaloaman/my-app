import React, { useState } from "react";
import customCss from "./itemCount.module.css";
import { Container,Row,Col } from "react-bootstrap";

export default function ItemCount({stock, addToCart, count, producto, setCantidad}){

    const [counter, setCounter] = useState(count);

    function incrementar(){
        if (counter < stock){setCounter(counter + 1);}
    };

    function decrementar(){
        if(counter > 0){setCounter(counter - 1)}
    };

    return(
        <>  
        <Container>
  <Row>
    <Col> 
    <div className={customCss.botonesGeneral}>
                <button onClick={incrementar} className={customCss.botonIncrementar}>+</button>
                <div className={customCss.contador}>{counter}</div>
                <button onClick={decrementar} className={customCss.botonDecrementar}>-</button>
                <br/>
                <button disabled={counter < 1 ? true : false} onClick={() => {setCantidad(counter); addToCart(producto={...producto, counter})}} className={customCss.botonComprar}>Agregar</button>
            </div>
            </Col>
  </Row>
</Container>
           
        </>
    );

}