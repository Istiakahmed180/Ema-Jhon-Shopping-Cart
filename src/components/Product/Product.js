import React from "react";
import "./Product.css";

const Product = (props) => {
  const { img, name, ratings, price, seller } = props.product;
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
      <button className="product-btn">Add To Cart</button>
    </div>
  );
};

export default Product;
