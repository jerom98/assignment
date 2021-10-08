import { useSelector, useDispatch } from "react-redux";
import Modal from "./Modal";
import CartItem from "./CartItem";
import { cartActions } from "../store";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const deleteItem = (item) => {
    dispatch(cartActions.removeItem(item));
  };

  let subtotal = cartItems.reduce(
    (total, item) => total + item.details.price,
    0
  );
  const cartItemsList = cartItems.map((item) => (
    <CartItem key={item.id} item={item} onClick={deleteItem} />
  ));
  return (
    <>
      <Modal onClose={props.toggleCart}>
        <button onClick={props.toggleCart}>X</button>
        {cartItemsList}
        <div className={classes.total}>
          <h3>SUBTOTAL</h3>
          <h3>{subtotal.toFixed(2)}</h3>
        </div>
      </Modal>
    </>
  );
};

export default Cart;
