import React from 'react'
import ItemDetailContainer from '../ItemDetailContainer'

const DetailPage = () => {
  return (
    <main className='bg-slate-400 h-min-main items-center flex flex-col'>
        <h1 className='text-center font-bold text-xl h-24 p-8'>Detalle de Producto</h1>
        <ItemDetailContainer/>
    </main>
  )
}

export default DetailPage