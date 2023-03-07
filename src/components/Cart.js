import React from "react";
import { useContext } from "react";
import { ProductContext } from "./ProductContext";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const { cart, calculateTotal } = useContext(ProductContext);

  return (
    <div className="cart">
        <h2>Cart</h2>
        {cart.length === 0 && <p>No items in cart</p>}
        {cart.map((item) => (
            <CartItem key={item.id} product={item} />
        ))}
        <div className="cart-total">
            <p>Total: {calculateTotal(cart)}</p>
        </div>
    </div>
  );
}