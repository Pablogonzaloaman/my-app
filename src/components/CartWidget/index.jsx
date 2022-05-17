import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";

export default function CartWidget(){

    const {totalItems} = useContext(CartContext);
  
    return(
        <>
            { totalItems > 0 && <Link to="/cart" >🛒{totalItems}</Link>}
        </>
    );
}