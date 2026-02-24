import React from "react";
import { useCart } from "../../context/CartContext";
import "../Css/SideCar.css";
export default function SideCar() {
  const { cart, removeFromCart, clearCart } = useCart();

  const totalValue = cart.reduce((acc, item) => {
    return acc + (item.preco || 0) * item.quantity;
  }, 0);

  return (
    <div className="produtos-carrinho">
      {cart.map((item) => (
        <div key={item._id} className="produto">
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <img src={item.imagemUrl} alt={item.nome} />
            <div className="info-produto">
              <h3>{item.nome}</h3>
              <p>Quantidade: {item.quantity}</p>
              <p className="preco-produto">
                R$ {(item.preco || 0).toFixed(2).replace(".", ",")}
              </p>
            </div>
          </div>
          <button
            onClick={() => removeFromCart(item._id)}
            className="deletar-produto-btn"
          >
            <FaTrash />
          </button>
          <hr />
        </div>
      ))}
    </div>
  );
}
