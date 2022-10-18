import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import ItemCount from "./ItemCount";
import { useCartContext } from "./CartContext";

export const ItemDetail = ({item})=>{

    const [cart,setCart] = useState(false)
    
    const {addProduct} = useCartContext();




        const onAdd = (qty) => {
            setCart(true)
            addProduct(item,qty)  
            
    
    }; 
    return( //acá stilar la card detalle
    <div className="font-semibold flex">
        <div className="flex flex-col p-2 pt-4 items-center">
                <p className="text-center p-2">{item?.nombre}</p>
                <img className="w-96 h-64" src={item?.image} alt="" /> 
        </div>
        <div className="text-center gap-16 p-8 flex flex-col">
            <p>{item?.detalles}</p>
            <h2 className="text-red-700	">$ {item?.tit}</h2>
            {cart ? <Link className="text-blue-500 hover:bg-slate-400" to={"/cart"}>Terminar Compra</Link> : <ItemCount onAdd={onAdd} initial={1} stock={8}/>}
        </div>  
    </div>
        
    )
}
export default ItemDetail;

