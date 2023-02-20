import React from "react";
import { useSelector } from "react-redux";

import { Header, ProductList } from "./components";
import { getProductsSelector } from "./store/selectors/products.selectors";

function App() {
  const products = useSelector((state) => getProductsSelector(state));

  return (
    <div className="app-container">
      <Header title="Redux App" />
      <ProductList products={products} />
    </div>
  );
}

export default App;
