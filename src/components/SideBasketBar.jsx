import { BsPatchCheck } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa";
import { TbChecklist } from "react-icons/tb";
import styles from "./SideBasketBar.module.css"
import { checkout } from "../features/cart/cartSlice";
const SideBasketBar = ({ state,dispatch }) => {
  return (
    <div className={styles.sidebar}>
      <div>
        <TbChecklist />
        <p>Total :</p>
        <span>{state.total.toFixed(2)} $</span>
      </div>
      <div>
        <FaHashtag />
        <p>Quantity : </p>
        <span>{state.itemsCounter}</span>
      </div>
      <div>
        <BsPatchCheck />
        <p>Status :</p>
        <span>{!state.checkout && "Pending ..."}</span>
      </div>
      <button onClick={() => dispatch(checkout())}>Checkout</button>
    </div>
  );
};

export default SideBasketBar;
