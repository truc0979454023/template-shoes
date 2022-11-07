import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../redux/features/productSlide";
import CartItem from "./CartItem";

const Cart = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("cart")))
      dispatch(getCart(JSON.parse(localStorage.getItem("cart"))));
    else dispatch(getCart([]));
  }, [dispatch]);

  return (
    <div className="cart-container">
      {data.cart.length > 0 ? (
        data?.cart?.map((item) => (
          <div key={item.id}>
            <CartItem cartItem={item} />
          </div>
        ))
      ) : (
        <span className="cart-notify">Your cart is empty.</span>
      )}
    </div>
  );
};

export default Cart;
