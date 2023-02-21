import { createStore, combineReducers } from "redux";
import { productsReducer } from "./reducers/products.reducer";
import { usersReducer } from "./reducers/users.reducer";

const rootReducers = combineReducers({
  products: productsReducer,
  users: usersReducer,
});

export const configureStore = () => {
  return createStore(rootReducers);
};
