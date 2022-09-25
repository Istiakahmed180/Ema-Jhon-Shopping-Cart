import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";

const Product = ({ handleAddToCart, product }) => {
  const { img, name, ratings, price, seller } = product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="product-name">{name.slice(0, 20)}</p>
        <p className="product-price">Price: ${price}</p>
        <p>
          <small>Manufacturar: {seller}</small>
        </p>
        <p>
          <small>Rating: {ratings} star</small>
        </p>
      </div>
      <button onClick={() => handleAddToCart(product)} className="product-btn">
        Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
