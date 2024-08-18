
import './App.css';
import Navbar from './component/Navbar';
import Product from './component/Product';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Productdetail from './component/Productdetail';
import Searchitem from './component/Searchitem';
import Cart from './component/Cart';
import { items } from './component/Data';
import React, { useState } from 'react';

const App=() =>{
  const[data, setData]=useState([...items])
  const [cart,setCart]=useState([])
  return (
    <>
    <Router>
      <Navbar cart={cart} setData={setData}/>
      <Routes>
        <Route path="/" element={<Product cart={cart} setCart={setCart} items={data}/>}/> 
        <Route path="/product/:id" element={<Productdetail cart={cart} setCart={setCart}/>}/>
        <Route path="/search/:term" element={<Searchitem cart={cart} setCart={setCart}/>}/>
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}/>
      </Routes>
      
    </Router>  
    </>
  );
}

export default App;
