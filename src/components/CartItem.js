import classes from "./CartItem.module.css";
const CartItem = ({ item, onClick }) => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.buttonContainer}>
          <button onClick={() => onClick(item)}>Delete</button>
        </div>
        <div className={classes.itemContainer}>
          <img src={item.details.image} />
          <div className={classes.details}>
            <span>{item.name}</span>
          </div>
          <span className={classes.price}>{item.details.price}</span>
        </div>
      </div>
    </>
  );
};

export default CartItem;
