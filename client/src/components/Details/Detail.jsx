import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  productById,
  removeDetail,
  pagesControl,
} from "../../redux/actions/ProductsActions";
import styles from "./Detail.module.css";
import imgDefault from "./imageDefault.jpg";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = useSelector((state) => state.products.detail);
  const page = useSelector((state) => state.products.pages);
  console.log(page);
  useEffect(() => {
    dispatch(productById(id));
    return () => {
      dispatch(removeDetail());
    };
  }, [id]);
  console.log(product);
  return product.name ? (
    <div className={styles.container}>
      <div className={styles.description}>
        <h2>{product.name}</h2>
        {product.image ? (
          <img
            src={
              product.image ||
              "https://d3t32hsnjxo7q6.cloudfront.net/i/d03d4a62759d7805ff8b41caebb4cbb0_ra,w158,h184_pa,w158,h184.jpeg"
            }
            alt="nohayimagen"
          />
        ) : (
          <img style={{ height: "270px" }} src={imgDefault} />
        )}
        <h4>${product.price}USD</h4>

        <p>{product.description}</p>
        {product.stock < 2 ? <h4>¡Último producto disponible!</h4> : null}
        <button
          onClick={() => {
            navigate(-1);
            dispatch(pagesControl(page));
          }}
        >
          Volver
        </button>
      </div>
    </div>
  ) : (
    <h1>CARGANDO...</h1>
  );
}
