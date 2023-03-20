import React from "react";

function Cart({ totalProducts = 0, totalPrice = 0 }) {
  return (
    <div className="cart-container">
      TOTAL $
      {totalPrice} Cart ({totalProducts})
    </div>
  );
}

export default Cart;
