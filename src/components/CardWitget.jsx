import React, { useContext } from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import { CartContext, useCartContext } from "./CartContext";

const CardWitget = () => {
 /*    const {} = useContext(CartContext);  *///ver clase 1:10
    const {totalProduct} = useCartContext();

    return (
        <div className="flex ">
            <div><BsFillCartCheckFill size="40px" color="red"/></div>
            <span className="p-2 font-semibold text-lg">{totalProduct() || '' }</span>
        </div>
    );
};

export default CardWitget;