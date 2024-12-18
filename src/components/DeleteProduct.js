import React from "react";
import { useHistory } from "react-router-dom";
import axiosInstance from "./axios";

const DeleteProduct = ({ id }) => {
  const history = useHistory();

  const handleDelete = async () => {
    try {
      await axiosInstance.delete(`/products/${id}`);  
      alert("Produto deletado com sucesso!");
      history.push("/products"); 
    } catch (error) {
      console.error("Erro ao deletar produto:", error);
      alert("Falha ao deletar produto.");
    }
  };

  return <button onClick={handleDelete}>Deletar Produto</button>;
};

export default DeleteProduct;
