import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeFromCart } from "../redux/cartSlice";
function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const TotalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Cart Items</h1>
      --------------------------------------------------------------------
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {" "}
          {cartItems.map((cartProduct) => (
            <div key={cartProduct.id}>
              <span>{cartProduct.title} </span>{" "}
              <span>
                <b>price</b>: {cartProduct.price}
              </span>
              <span>
                <b>quantity : {cartProduct.quantity}</b>
              </span>
              <button onClick={() => dispatch(increaseQty(cartProduct.id))}>
                +
              </button>
              <button onClick={() => dispatch(decreaseQty(cartProduct.id))}>
                -
              </button>
              <button onClick={() => dispatch(removeFromCart(cartProduct.id))}>
                Remove
              </button>
            </div>
          ))}
        </>
      )}
      <h3>Total Price:{TotalPrice}</h3>
    </div>
  );
}
export default Cart;
