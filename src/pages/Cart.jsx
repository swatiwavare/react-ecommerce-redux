import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeFromCart } from "../redux/cartSlice";
import "./Cart.css"; // Import a dedicated CSS file

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="cart-container">
      <h1 className="cart-title">Cart Items</h1>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Cart is empty</p>
      ) : (
        <>
          {cartItems.map((cartProduct) => (
            <div key={cartProduct.id} className="cart-item">
              <div className="cart-item-info">
                <span className="cart-item-title">{cartProduct.title}</span>
                <span className="cart-item-price">
                  <b>Price:</b> ${cartProduct.price}
                </span>
                <span className="cart-item-quantity">
                  <b>Quantity: {cartProduct.quantity}</b>
                </span>
              </div>
              <div className="cart-item-controls">
                <button
                  onClick={() => dispatch(increaseQty(cartProduct.id))}
                  className="qty-btn"
                >
                  +
                </button>
                <button
                  onClick={() => dispatch(decreaseQty(cartProduct.id))}
                  className="qty-btn"
                >
                  -
                </button>
                <button
                  onClick={() => dispatch(removeFromCart(cartProduct.id))}
                  className="remove-btn"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </>
      )}
      <h3 className="total-price">Total Price: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
}

export default Cart;
