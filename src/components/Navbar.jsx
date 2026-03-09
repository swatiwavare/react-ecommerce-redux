import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">MyShop</Link>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>

        <Link to="/cart" className="cart-link">
          Cart
          <span className="cart-count">{totalCount}</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
