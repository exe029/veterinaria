import React from 'react';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Footer from './components/Footer';
import CartProvider from './components/CartContext';
import Cart from './components/Cart';
//import Checkout from './components/checkout';
import CheckoutPage from './components/page/CheckoutPage';
import DetailPage from './components/page/DetailPage';

function App() {


  return (
    <CartProvider>

      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<ItemListContainer/>} />
        <Route exact path='/categoria/:categoriaId' element={<ItemListContainer/>} />
        <Route exact path='/detalle/:id' element={<DetailPage/>} />
        <Route exact path='/cart' element={<Cart/>} />
        <Route exact path='/checkoutpage' element={<CheckoutPage/>} />
      </Routes> 
      <Footer/>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App;