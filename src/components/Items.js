import classes from "./Items.module.css";

const Item = ({ item, isLoading, onClick }) => {
  if (isLoading) return <div>Loading</div>;
  else
    return (
      <>
        <div className={classes.item}>
          <img src={item.details.image} />
          <p>{item.name}</p>
          <p>{item.details.price}</p>
          <button onClick={() => onClick(item)}>Add to Cart</button>
        </div>
      </>
    );
};
export default Item;
