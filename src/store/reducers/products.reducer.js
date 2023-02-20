import { PRODUCTS } from "../../consts";

const initialState = {
  productList: PRODUCTS,
  selected: [],
};

export const productsReducer = (state = initialState) => {
  return state;
};
