import { Link, useParams } from "react-router-dom";
import { fetchProducts } from "../features/products/productSlice";
import { useEffect } from "react";
// import { useProductDetils } from "../context/ProductContext";
import { useDispatch, useSelector } from "react-redux";

import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";

import Loader from "../components/Loader";
import styles from "./DetailsPage.module.css";

const DetailsPage = () => {
  const dispatch = useDispatch()
  const { id } = useParams();
  const productDetails = useSelector((store) =>
    store.products.products.find((i) => i.id === id)
  );
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  if (!productDetails) return <Loader />;
  const { image, title, description, category, price } = productDetails;
  return (
    <div className={styles.container}>
      <img src={image} alt={title} />
      <div className={styles.information}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.category}>
          <SiOpenproject />
          {category}
        </p>
        <div>
          <span className={styles.price}>
            <IoMdPricetag />
            {price} $
          </span>
          <Link to="/products">
            <FaArrowLeft />
            <span>Back to shop</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
