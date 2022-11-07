import "./App.css";
import Card from "./components/Card";
import datas from "./data/shoes.json";
import { useDispatch } from "react-redux";
import { getProduct } from "./redux/features/productSlide";
import { useEffect } from "react";
import Products from "./components/product/Products";
import Cart from "./components/cart/Cart";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct(datas.shoes));
  }, [dispatch]);

  return (
    <div className="App">
      <Card title="Our Products">
        <Products />
      </Card>

      <Card title="Your Cart" isCart={true}>
        <Cart />
      </Card>
    </div>
  );
}

export default App;
