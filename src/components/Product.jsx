import React from "react";

function Product({ name, price }) {
  return (
    <div className="product-container">
      <h3>Product: {name}</h3>
      <h5>Price: {price}</h5>
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
