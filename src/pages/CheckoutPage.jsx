// import { useCart } from "../context/CartContext";
import BasketCard from "../components/BasketCard";
import styles from "./Checkout.module.css";
import empty from "../assets/empty.jpg";
import SideBasketBar from "../components/SideBasketBar";
import { useSelector } from "react-redux";
const CheckoutPage = () => {
  // const [state, dispatch] = useCart();
  const state = useSelector((store) => store.cart);
  // const clickHandler = (type, payload) => dispatch({ type, payload });
  if (!state.itemsCounter) {
    return (
      <div className={styles.empty}>
        <h1>Basket Card is Empty 😢</h1>
        <img src={empty} alt="empty" />
      </div>
    );
  }
  return (
    <div className={styles.container}>
      {/* <SideBasketBar state={state} clickHandler={clickHandler} />

      <div className={styles.products}>
        {state.selectedItems.map((product) => (
          <BasketCard
            key={product.id}
            data={product}
            clickHandler={clickHandler}
          />
        ))}
      </div> */}
    </div>
  );
};

export default CheckoutPage;
