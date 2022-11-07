import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

const Products = () => {
  const { data } = useSelector((state) => state);
  return (
    <div className="product-list">
      {data?.products?.map((product) => (
        <div key={product.id}>
          <ProductItem product={product} />
        </div>
      ))}
    </div>
  );
};

export default Products;
