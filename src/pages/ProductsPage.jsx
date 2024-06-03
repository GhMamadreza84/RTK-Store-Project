import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  createQueryObject,
  filterProducts,
  getInitialQuery,
  searchProducts,
} from "../helper/Helper";
// import { useProducts } from "../context/ProductContext";

import Card from "../components/Card";
import Loader from "../components/Loader";
import styles from "./ProductsPage.module.css";
import SearchBox from "../components/SearchBox";
import Sidebar from "../components/Sidebar";
import { fetchProducts } from "../features/products/productSlice";
import { useDispatch, useSelector } from "react-redux";
const ProductsPage = () => {
  const dispatch = useDispatch();
  const {products,loading} = useSelector((store) => store.product);

  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    setDisplayed(products)
    setQuery(getInitialQuery(searchParams));
  }, [products]);
  console.log(displayed)

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search);
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className={styles.container}>
        <div className={styles.products}>
          {loading && <Loader />}
          {displayed.map((product) => (
            <Card key={product.id} data={product} />
          ))}
        </div>
        <Sidebar query={query} setQuery={setQuery} />
      </div>
    </>
  );
};

export default ProductsPage;
