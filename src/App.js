import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Login from './components/Login';
import Signup from './components/Signup';
import Products from './components/Products';
import Product from './components/Product';
import CreateProduct from './components/CreateProduct'; 
import UpdateProduct from './components/UpdateProduct';  
import DeleteProduct from './components/DeleteProduct'; 

function App() {
  return (
    <Router>
      <div className="App">
        <h1>My Store</h1>
        <Routes>  {}
          <Route path="/login" element={<Login />} />  {}
          <Route path="/signup" element={<Signup />} />  {}
          <Route path="/products" element={<Products />} />  {}
          <Route path="/products/:id" element={<Product />} />  {}
          <Route path="/products/create" element={<CreateProduct />} />  {}
          <Route path="/products/update/:id" element={<UpdateProduct />} />  {}
          <Route path="/products/delete/:id" element={<DeleteProduct />} />  {}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
