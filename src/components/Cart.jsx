import React from "react";
import { useSelector } from "react-redux";
import {
  getTotalPriceSelector,
  getSelectedProductsSelector,
} from "../store/selectors/products.selectors";

function Cart() {
  const { selected, totalPrice } = useSelector((state) => ({
    totalPrice: getTotalPriceSelector(state),
    selected: getSelectedProductsSelector(state),
  }));

  const totalProducts = Object.values(selected).reduce(
    (total, products) => total + products,
    0
  );

  return (
    <div className="cart-container">
      TOTAL PRICE: ${totalPrice} Cart ({totalProducts})
    </div>
  );
}

export default Cart;
