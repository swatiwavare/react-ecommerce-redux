import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const Cart = lazy(() => import("./pages/Cart"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
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
      <Suspense fallback={<h2 className="text-center mt-10">Loading...</h2>}>
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
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
