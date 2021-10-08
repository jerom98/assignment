import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import { cartActions } from "./store";
import Item from "./components/Items";
import Sizes from "./components/Sizes";
import Cart from "./components/Cart";
import CartIcon from "./components/CartIcon";

const URL =
  "https://my-json-server.typicode.com/prasadhewage/ecommerce/shipments";

function App() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.items);

  useEffect(() => {
    fetchItems();
  }, []);

  async function fetchItems() {
    try {
      const response = await fetch(URL);
      if (!response.ok)
        throw new Error(`Something went wrong ${response.status}`);
      const items = await response.json();
      setItems(items);
      setFilteredItems(items);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }

  const toggleCart = () => {
    setIsCartOpen((prevState) => !prevState);
  };
  const addToCart = (item) => {
    dispatch(cartActions.addItem(item));
  };

  const sizeFilter = (size) => {
    setFilteredItems(items);
    let newFilteredItems;
    switch (size) {
      case "all":
        newFilteredItems = items;
        break;
      case "xs":
        newFilteredItems = items.filter(
          (item) => item.details.size === "xsmall"
        );
        break;
      case "s":
        newFilteredItems = items.filter(
          (item) => item.details.size === "small"
        );
        break;
      case "m":
        newFilteredItems = items.filter(
          (item) => item.details.size === "medium"
        );
        break;
      case "ml":
        newFilteredItems = items.filter(
          (item) => item.details.size === "mlarge"
        );
        break;
      case "l":
        newFilteredItems = items.filter(
          (item) => item.details.size === "large"
        );
        break;
      case "xl":
        newFilteredItems = items.filter(
          (item) => item.details.size === "xlarge"
        );
        break;
      case "xxl":
        newFilteredItems = items.filter(
          (item) => item.details.size === "xxlarge"
        );
        break;
    }
    setFilteredItems(newFilteredItems);
  };

  const itemsList = filteredItems.map((item) => (
    <Item isLoading={isLoading} item={item} onClick={addToCart} />
  ));

  return (
    <>
      <div className="cart">
        <button onClick={toggleCart}>
          <CartIcon />
          Cart
        </button>
        {isCartOpen && <Cart toggleCart={toggleCart} />}
      </div>
      <div className="content">
        <div>
          <Sizes sizeFilter={sizeFilter} />
        </div>
        <div className="itemsList">{itemsList}</div>
      </div>
    </>
  );
}

export default App;
