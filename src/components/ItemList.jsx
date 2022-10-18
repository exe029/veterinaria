import React from "react";
import Item from "./Item.jsx";

const ItemList= ({item=[]})=>{

    
    return(
        <div className="grid grid-cols-3 gap-10 p-4 ">
            {item.map(item=> <Item key={item.id} item={item}/>) }
        </div>
        
    )
}
export default ItemList;