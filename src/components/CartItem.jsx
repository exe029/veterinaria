import React from "react";
import { useCartContext } from "./CartContext";

const CartItem = ({item}) =>{
    const {removeProduct}=useCartContext();

    return(
//Acá puedo estilar
<div>
    <div className="container mx-auto mt-5 text-center">
        <div className="grid grid-cols-5 gap-4 my-2">
        <p className="bg-orange-500"> {item?.nombre} </p>
        <p className="bg-orange-500"> ${item?.tit}</p> 
        <p className="bg-orange-500"> {item?.qty} </p>
        <p className="bg-orange-500"> ${item?.qty * item.tit} </p>
        <button className="hover:bg-slate-400" onClick={()=>removeProduct(item.id)}>Eliminar</button>
        </div>
    </div>
</div>
)
}

export default CartItem;