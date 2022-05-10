import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore";
import styles  from "./index.module.css";
import Carousel from "../Carousel";


export default function ItemListContainer(){
    

    const [products2, setProducts2] = useState([]);

    const {categoryId} = useParams();

    console.log(categoryId);

    useEffect(() => {
        const db = getFirestore();
       
        let productosRef;

        if(!categoryId){productosRef = collection(db, "products")}
        else{productosRef = query(collection(db, "products"), where("category", "==", categoryId))};

        getDocs(productosRef).then((res) => {
            setProducts2(res.docs.map(prod => ({id: prod.id, ...prod.data()})))
        });
        console.log(products2);
        
    }, [categoryId]);

    return(
        <> 
            <div>
            <Carousel/>
            </div>
             <div className={styles.itemListContainer}>
            
                
            <ItemList products={products2} />

            </div>
        </>
    );

    }

