import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Navbar() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
        background: "#eee",
      }}
    >
      <Link to="/">Home</Link>

      <Link to="/products">Products</Link>

      <Link to="/cart">Cart : ({totalCount})</Link>
    </div>
  );
}
export default Navbar;
