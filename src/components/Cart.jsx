import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "./CartContext";
import CartItem from "./CartItem";


const Cart = () =>{
    const {cart,totalPrice,clearCart} = useCartContext();
    if(cart.length === 0){
        return(
            <>
            <div className="h-min-main flex flex-col">
                <p className="text-center bg-slate-500 ">No hay elementos en el Carrito</p>
                <Link to={"/"}> <p className="text-center font-semibold hover:bg-slate-400" >Hacer compras</p> </Link>
            </div>
            </>
        )
    }
    //acá  estilar el Total, Checkout y Eliminar Todo
    return(
        <>
        <main className="h-min-main pb-6">

        {
            <section>
                    <table className="p-2 table-fixed w-full border border-slate-600 uppercase border-separate border-spacing-3">
                    <thead>
                        <tr>
                        <th>productos</th>
                        <th>precio</th>
                        <th>cantidad</th>
                        <th>total</th>
                        <th></th>
                        </tr>
                    </thead>
                    </table>
                    </section>
        }
        {
            cart.map(item =><CartItem key={item.id} item={item} />)
        }
        {
            <table className="p-2 table-fixed w-full border border-slate-600 uppercase border-separate border-spacing-3">
        <thead>
            <tr>
            <th><button className="hover:bg-slate-400"  onClick={()=>clearCart()}> <p> Eliminar Todo</p> </button></th>
            <th><p className="text-center ">Total: {totalPrice()} </p></th>
            <th><Link className="h-min-main pb-6 " to={"/checkoutpage"}>  <p className="text-center hover:bg-slate-400">Confirmar compra</p> </Link></th>
            <th></th>
            </tr>
        </thead>
    </table>
        }
    </main>
        </>
    )
}

export default Cart;