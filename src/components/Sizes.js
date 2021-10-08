import classes from "./Sizes.module.css";

const Sizes = ({ sizeFilter }) => {
  return (
    <div className={classes.container}>
      <h3>Sizes</h3>
      <div className={classes.sizes}>
        <button onClick={() => sizeFilter("all")}>ALL</button>
        <button onClick={() => sizeFilter("xs")}>XS</button>
        <button onClick={() => sizeFilter("s")}>S</button>
        <button onClick={() => sizeFilter("m")}>M</button>
        <button onClick={() => sizeFilter("ml")}>ML</button>
        <button onClick={() => sizeFilter("l")}>L</button>
        <button onClick={() => sizeFilter("xl")}>XL</button>
        <button onClick={() => sizeFilter("xxl")}>XXL</button>
      </div>
    </div>
  );
};
export default Sizes;
