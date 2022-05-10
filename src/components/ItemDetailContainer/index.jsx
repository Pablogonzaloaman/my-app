import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail';
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import styles from "./index.module.css";

export default function ItemDetailContainer() {
    
    let stock = 8;
    let count = 0;
    const [cantidad, setCantidad] = useState(count);
    const [product2, setProduct2] = useState({});

    const {id} = useParams();


    useEffect(()=>{
      const db = getFirestore();
      const prodRef = doc(db, "products",  id);
      getDoc(prodRef).then((res) => {
        setProduct2({id: res.id, ...res.data()})
      });

      console.log(cantidad);
    }, [cantidad, id]);
    

  return (
    <>
    <div className={styles.itemContainer}> 
       
        <ItemDetail producto={product2} stock={stock} count={count} img={product2.img} cantidad={cantidad} setCantidad={setCantidad} detalle={product2.detalle} nombre={product2.nombre}  talle={product2.talle} />
      </div>
    </>
       
  )
};


