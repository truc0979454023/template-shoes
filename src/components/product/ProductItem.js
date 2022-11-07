import React, { useEffect, useState } from "react";
import check from "../../assets/check.png";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../redux/features/productSlide";

const ProductItem = ({ product }) => {
  const [isAddtoCart, setIsAddToCart] = useState(false);

  const dispatch = useDispatch();
  const { data } = useSelector((state) => state);

  useEffect(() => {
    if (data?.cart?.find((item) => item.id === product.id)) {
      setIsAddToCart(true);
    } else setIsAddToCart(false);
  }, [data.cart, product.id]);

  const handleAddToCart = () => {
    dispatch(addCart({ ...product, quantity: 1 }));
  };

  return (
    <div className="product-container">
      <div
        className="product-top"
        style={{ backgroundColor: `${product.color}` }}
      >
        <img className="product-image" src={product.image} alt="" />
      </div>
      <div className="product-body">
        <span className="product-name">{product.name}</span>
        <span className="product-description">{product.description}</span>
        <div className="product-footer">
          <span className="product-price">${product.price}</span>
          <button
            style={{ cursor: `${isAddtoCart ? "default" : "pointer"}` }}
            className={`product-button ${!isAddtoCart && "isAddToCart"}`}
            type=""
            onClick={handleAddToCart}
          >
            {isAddtoCart ? (
              <img className="product-button-icon" src={check} alt="" />
            ) : (
              "  Add to cart"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
