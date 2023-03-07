import React from "react";
import { CartItem } from "./CartItem";
import { useContext } from "react";
import { ProductContext } from "./ProductContext";

export const CartItems = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, formatPrice } = useContext(ProductContext);

  return (
    <div>
      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          removeFromCart={removeFromCart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          formatPrice={formatPrice}
        />
      ))}
    </div>
  );
};

