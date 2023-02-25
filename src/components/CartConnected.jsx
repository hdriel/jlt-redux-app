import React from "react";
import { useSelector } from "react-redux";

import {
  getTotalPriceSelector,
  getSelectedProductsSelector,
} from "../store/selectors/products.selectors";
import Cart from "./Cart";

function CartConnected({}) {
  const { selected, totalPrice } = useSelector((state) => ({
    totalPrice: getTotalPriceSelector(state),
    selected: getSelectedProductsSelector(state),
  }));

  const totalProducts = Object.values(selected).reduce(
    (total, products) => total + products,
    0
  );

  return <Cart totalPrice={totalPrice} totalProducts={totalProducts} />;
}

export default CartConnected;
