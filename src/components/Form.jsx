import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { CartContext } from './CartContext';
import { db } from './firebaseConfig';

const Form = ({ handleId }) => {
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const { totalPrice, cart, clearCart} = useContext(CartContext);
    const total = totalPrice();

    const handleSubmit = (e) => {
        e.preventDefault();
        const orden = {
            buyer: { nombre, telefono },
            date: serverTimestamp(),
            cart,
            total,
        };
        const refOrden = collection(db, 'orders');
        addDoc(refOrden, orden).then((res) => {
            handleId(res.id);
        });
    };

    const handleNombre = (e) => setNombre(e.target.value);

    const handleTelefono = (e) => setTelefono(e.target.value);

    return (

        <form  className='flex flex-col p-4 border border-slate-600' action="" onSubmit={handleSubmit}>
            <input className='p-4 m-2'
                type="text"
                name="nombre"
                placeholder="Nombre Completo"
                value={nombre}
                onChange={handleNombre}
                required
                />
            <input
            className='p-4 m-2'
                type="number"
                name="telefono"
                placeholder="Telefono"
                value={telefono}
                onChange={handleTelefono}
                />
            <button className='p-4 m-2 hover:bg-slate-400 bg-white ' onClick={()=>clearCart()}>Enviar</button>
        </form>

    );
};

export default Form;