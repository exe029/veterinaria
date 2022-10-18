import React, { useState, useContext} from "react";



export const CartContext = React.createContext([]);

export const useCartContext = () =>useContext(CartContext)


const CartProvider = (props) =>{
    const [cart,setCart] = useState([])

    const addProduct = (item, qty) =>{
        const newItem =  {...item, qty};
        if(cart.some(item => item.id == newItem.id)){
            console.warn('rl producto ya esta agregado');
            const newCart = cart.map( item => {
                if(item.id == newItem.id){
                    item.qty = item.qty + newItem.qty;
                }
                return item;
            });
            setCart(newCart);
        }else{
            setCart([...cart, newItem])
        }
    
    }
    console.log("carrito ", cart)

    const totalPrice = () =>{ return cart.reduce((prev, act)=>prev + act.qty * act.tit, 0)};

    const totalProduct= () => cart.reduce((acumulador, productoActual)=>acumulador + productoActual.qty,0)

    const clearCart = () => setCart([]);

    const isInCart = (id) =>cart.find(ProductosArray => ProductosArray.id === id) ? true: false;

    const removeProduct = (id) =>setCart(cart.filter(ProductosArray=> ProductosArray.id !== id));





//cart, addToCart eso va dentro del value

        return (
            <CartContext.Provider value={{clearCart,isInCart,removeProduct, addProduct, totalPrice, totalProduct, cart}}>
                {props.children}
            </CartContext.Provider>
        )

}

export default CartProvider;