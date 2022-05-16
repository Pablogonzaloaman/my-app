import React, {useContext, useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import { CartContext } from '../CartContext';
import {addDoc, collection, getFirestore, serverTimestamp} from "firebase/firestore";

export default function CartCheckout() {

    
    const[emailReq, setEmailReq] = useState("");
    const[cellphoneReq, setCellphoneReq] = useState(0);
    const handleEmailRequired = (e) => {setEmailReq(e.target.value)}
    const handleCellphoneRequired = (e) => {setCellphoneReq(e.target.value)}


    const {cart, buyAll, valorTotal} = useContext(CartContext);
    const [buyer, setBuyer] = useState({
        nombre: "",
        apellido : "",
        celular: "",
        email: ""
    });

    const [checkoutId, setCheckoutId] = useState("");

    const handleOnChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }

    const sendOrder = () => {
        if(emailReq === ""){alert("Complete los campos obligatorios")}
        else if(cellphoneReq === 0){alert("Complete los campos obligatorios")}else{
        let orderDate = serverTimestamp();
        const venta = {
            buyer: buyer,
            items: cart,
            total: valorTotal,
            date: orderDate
        }
        const db = getFirestore();
        const ordersCollection = collection(db, "ventas");
        addDoc(ordersCollection, venta).then(({id})=> setCheckoutId(id));
        buyAll();
        }
    }


  return (
    <>
    
        <h2> <strong>Confirmacion de compra</strong>  </h2>
        { checkoutId === "" && <>
        <Form><Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control name='email' type="email" placeholder="Ingrese su email" onChange={(e)=> {handleOnChange(e); handleEmailRequired(e)}} required/>
            <Form.Text className="text-muted">
                Campo obligatorio.
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control name='email' type="email" placeholder="Ingrese su nombre" onChange={handleOnChange} required/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Apellido</Form.Label>
            <Form.Control name='apellido' type="text" placeholder="Ingrese su apellido" onChange={handleOnChange} required/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Numero de Celular</Form.Label>
            <Form.Control name='celular' type="number" placeholder="Ingrese su numero de celular" onChange={(e)=> {handleOnChange(e); handleCellphoneRequired(e)}} required/>
            <Form.Text className="text-muted">
                Campo obligatorio.
            </Form.Text>
        </Form.Group></Form>
        </>}
        {checkoutId === "" ? <Button variant="dark" type='submit' onClick={() => sendOrder()}>Confirmar</Button> :
        <h5> Muchas gracias por su compra!!! <hr /> Id de compra :<strong>" {checkoutId} "</strong>,  este es tu id, guardalo y usalo ante alguna eventualidad. <hr /> Para seguir comprando, retorna al Inicio .<hr/> <img width={200} height={200} src="../fotos/VALTactivewearLogo-02.png" /></h5>}
       
    </>
  )
}