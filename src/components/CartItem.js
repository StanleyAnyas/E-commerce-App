import React from "react";

export const CartItem = ({ item, removeFromCart, increaseQuantity, decreaseQuantity, formatPrice }) => {
  return (
    <div className="cart-item">
      <img src={`${item.image}`} alt={item.name} />
      <div className="cart-item-details">
        <p className="cart-item-name">{item.name}</p>
        <p className="cart-item-price">{formatPrice(item.price)}</p>
        <p className="cart-item-quantity">Quantity: {item.quantity}</p>
        <div className="cart-item-buttons">
          <button onClick={() => increaseQuantity(item)}>+</button>
          <button onClick={() => decreaseQuantity(item)}>-</button>
          <button onClick={() => removeFromCart(item)}>Remove</button>
        </div>
      </div>
    </div>
  );
}