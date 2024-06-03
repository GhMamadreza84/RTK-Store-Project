import { shortenText } from "../helper/Helper";
import { MdDeleteOutline } from "react-icons/md";
import styles from "./BasketCard.module.css";
import { decrease, increase, removeItem } from "../features/cart/cartSlice";
const BasketCard = ({ data, dispatch }) => {
  const { image, title, price, quantity } = data;
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <p>{shortenText(title)}</p>
      <p>{price * quantity} $</p>
      <div className={styles.actions}>
        {quantity === 1 && (
          <button onClick={() => dispatch(removeItem(), data)}>
            <MdDeleteOutline />
          </button>
        )}
        {quantity > 1 && (
          <button onClick={() => dispatch(decrease(), data)}>-</button>
        )}
        <span>{quantity}</span>
        <button onClick={() => dispatch(increase(), data)}>+</button>
      </div>
    </div>
  );
};

export default BasketCard;
