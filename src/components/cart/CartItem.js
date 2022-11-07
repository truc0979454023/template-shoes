import React, { useState } from "react";
import plus from "../../assets/plus.png";
import minus from "../../assets/minus.png";
import trash from "../../assets/trash.png";
import { useDispatch } from "react-redux";
import {
  removeCartItem,
  incrementCartItem,
  decrementCartItem,
} from "../../redux/features/productSlide";

const CartItem = ({ cartItem }) => {
  const [isRemove, setIsRemove] = useState(false);
  const dispatch = useDispatch();

  const handleRemove = () => {
    setIsRemove(true);
    setTimeout(() => {
      dispatch(removeCartItem(cartItem.id));
    }, 350);
  };
  return (
    <div className={`cart-item ${isRemove && "isRemove"} `}>
      <div
        className="cart-item-left"
        style={{ backgroundColor: `${cartItem.color}` }}
      >
        <img src={cartItem.image} alt="" />
      </div>
      <div className="cart-item-right">
        <span className="cart-item-name">{cartItem.name}</span>
        <span className="cart-item-price">${cartItem.price}</span>
        <div className="cart-item-button">
          <div className="cart-item-quantity">
            <div
              onClick={() => dispatch(decrementCartItem(cartItem.id))}
              className="cart-item-minus"
            >
              <img src={minus} alt="" />
            </div>
            <span className="cart-item-number">{cartItem.quantity}</span>
            <div
              onClick={() => dispatch(incrementCartItem(cartItem.id))}
              className="cart-item-plus"
            >
              <img src={plus} alt="" />
            </div>
          </div>
          <div onClick={handleRemove} className="cart-item-trash">
            <img src={trash} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
