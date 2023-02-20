import { createStore, combineReducers } from "redux";
import { productsReducer } from "./reducers/products.reducer";

const rootReducers = combineReducers({
  products: productsReducer,
});

export const configureStore = () => {
  return createStore(rootReducers);
};
