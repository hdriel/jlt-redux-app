export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_FROM_CART = "DELETE_FROM_CART";

export const addProductToCartAction = (productId) => {
  return { type: ADD_TO_CART, productId };
};

export const removeProductFromCartAction = (productId) => {
  return { type: DELETE_FROM_CART, productId };
};
