import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "./axios";

const UpdateProduct = () => {
  const { id } = useParams();  
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axiosInstance.get(`/products/${id}`);
        setProduct(response.data);  
      } catch (error) {
        console.error("Erro ao obter produto:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axiosInstance.put(`/products/${id}`, product);  
      alert("Produto atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar produto:", error);
      alert("Falha ao atualizar produto.");
    }
  };

  return (
    <div>
      <h2>Atualizar Produto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
        <textarea
          value={product.description}
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
        />
        <input
          type="number"
          value={product.price}
          onChange={(e) =>
            setProduct({ ...product, price: e.target.value })
          }
        />
        <input
          type="number"
          value={product.quantity}
          onChange={(e) =>
            setProduct({ ...product, quantity: e.target.value })
          }
        />
        <button type="submit">Atualizar Produto</button>
      </form>
    </div>
  );
};

export default UpdateProduct;
