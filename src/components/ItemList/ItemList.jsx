import React from 'react';
import Item from "../Item/Item" 


export default function ItemList ({products  }) {
  return (
    products.map(product => 
     
        <Item       
        id={product.id}
        nombre={product.nombre}
        precio={product.precio}
        img={product.img}/>
        
        
    )
  )
}
