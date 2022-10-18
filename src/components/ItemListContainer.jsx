import React, { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import { db } from "./firebaseConfig";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from 'firebase/firestore';


export const ItemListContainer =({title})=>{

const [item,setItem] = useState([]);


const {categoriaId}= useParams();


useEffect(() =>{
    const prodColecction = collection(db, 'Balanceado');
    const ref = categoriaId
        ? query(prodColecction, where('category', '==', categoriaId))
        : prodColecction;

    getDocs(ref).then((response) => {
        // data() método que nos provee firestore para transformar la información
        const products = response.docs.map((prod) => {
            console.log(prod);
            return {
                id: prod.id,
                ...prod.data(),
            };
        });
        setItem(products);
    });


}, [categoriaId])




    return (
        <main className="h-min-main bg-slate-200 bg-right bg-cover bg-no-repeat bg-[url(https://cdn.pixabay.com/photo/2017/07/22/08/49/cat-2528119_960_720.jpg)]">

        <section className="flex flex-col items-start p-24 opacity-80 font-semibold">
            <h1 className=" bg-slate-500 w-full text-center" >{title}</h1>
            <div className=" text-center">
            <ItemList item={item}/>
        </div>
        </section>
        </main>
    )
}

export default ItemListContainer;
