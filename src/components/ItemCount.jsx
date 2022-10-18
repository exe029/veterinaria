import React from 'react';
import { useState } from 'react';


const ItemCount = ({ onAdd, initial, stock }) => {
        const [qty, setQty] = useState(initial);
        

        const addProduct = (num) => {
        setQty(qty + num);
};

    return (
    <div className=" flex	flex-col justify-center	items-center		">
        <div className="flex flex-row  bg-green-500  w-18	h-18 font-semibold	text-base border-4 	border-red-800  rounded-lg">
            <button
                className="bg-pink-900  text-blue-50	w-6	h-full	"
                onClick={() => addProduct(-1)}

                disabled={qty === initial}
            >
            -
            </button>
            <span className="bg-white	w-6	text-center	h-full">{qty}</span>
            <button
                className="bg-indigo-500 text-blue-50 w-6 h-full	"
                onClick={() => addProduct(+1)}
                disabled={qty === stock}
            >
                +
            </button>
        </div>

            <button
                className="bg-slate-800	 px-2 m-2 rounded-full border-2	border-red-800 hover:bg-slate-400	 text-white	"
                onClick={() => {
                    onAdd(qty);
                }}
                disabled={stock === 0 ? true : null}
            >
                Añadir
            </button>
        </div>
    );
};

export default ItemCount;