import React, { useState, useEffect } from "react";
import axiosInstance from "./axios";  

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
   
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get("/products");  
        setProducts(response.data);  
      } catch (error) {
        console.error("Erro ao obter produtos:", error);
      }
    };

    fetchProducts();
  }, []);  

  return (
    <div>
      <h2>Lista de Produtos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price} - {product.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
