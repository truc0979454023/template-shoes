import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import nike from "../assets/nike.png";
import { totalCart } from "../redux/features/productSlide";

const Card = ({ title, isCart, children }) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state);

  useEffect(() => {
    dispatch(totalCart());
  }, [dispatch, data.cart]);

  return (
    <div className="card">
      <div className="card-top">
        <img className="card-top-logo" src={nike} alt="" />
      </div>
      <div className="card-title">
        {title}
        {isCart && <span>${data.total}</span>}
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;
