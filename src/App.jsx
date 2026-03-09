import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import "./App.css";
function App() {
  //const [cart, setCart] = useState([]);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || [],
  );
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);
  // const addToCart = (product) => {
  //   const existingProduct = cart.find((item) => item.id === product.id);
  //   if (existingProduct) {
  //     setCart(
  //       cart.map((item) =>
  //         item.id === product.id
  //           ? { ...item, quantity: item.quantity + 1 }
  //           : item,
  //       ),
  //     );
  //   } else {
  //     setCart([...cart, { ...product, quantity: 1 }]);
  //   }
  // };
  const removeFromCart = (id) => {
    const newArray = cart.filter((cartItem) => cartItem.id !== id);
    setCart(newArray);
  };
  // const IncreaseQty = (id) => {
  //   setCart(
  //     cart.map((item) =>
  //       item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
  //     ),
  //   );
  // };
  // const RemoveQty = (id) => {
  //   setCart(
  //     cart
  //       .map((item) =>
  //         item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
  //       )
  //       .filter((item) => item.quantity > 0),
  //   );
  // };
  return (
    <BrowserRouter>
      <Navbar cart={cart} />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route path="/product/:id" element={<ProductDetails />} />

        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cart}
              // removeFromCart={removeFromCart}
              // IncreaseQty={IncreaseQty}
              // RemoveQty={RemoveQty}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
