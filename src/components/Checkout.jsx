import React from 'react';
import { useState} from 'react';
import Form from './Form';
import { Link } from 'react-router-dom';


const Checkout = () => {
    const [orderId, setOrderId] = useState('');

    const handleId = (numeroDeOrden) => {
        setOrderId(numeroDeOrden);
    };

    if (orderId) {
        return (
            
            <div className='h-min-main p-24 items-center flex flex-col bg-cover bg-center bg-no-repeat font-bold bg-[url(https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)]'>

            <h1 className=' text-center  p-2'>
                Gracias por comprar en <strong>La Granja</strong>. 
            </h1>
            <h2 className='text-red-900 p-2'>Te dejamos el número de seguimiento:{' '}
                {orderId}</h2>
            <button  className='bg-slate-500 p-2 mt-8 hover:bg-slate-400'> <Link to="/"> Volver a Inicio </Link> </button>
            </div>
            
        );
    }

    return (
        <div className='h-min-main p-48 bg-emerald-100'>
            <Form  handleId={handleId} />
        </div>
    );
};

export default Checkout;