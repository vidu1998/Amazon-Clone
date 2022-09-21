import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import ShoppingCartOutliedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../redux/actions";
const Product = ({
  id,
   title, 
   image,
    price, 
    rating,
     specification, 
     deatil
    }) => 
{

  const dispatch=useDispatch();

  const onAddItemToBasket=()=>{
    const item={
      id,
      title,
      image,
      price,
      rating,
      specification,
      deatil,
    };
    dispatch(addToBasket(item))
  }

  return (
    <div className="product">
      <div className="info">
        <Link to={`/product/${id}`} className="title">
          <p>{title}</p>
        </Link>
        <p className="price">
          <strong>$</strong>
          <strong>{price}</strong>
        </p>
        <div className="rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p ley={index}>⭐</p>
            ))}
        </div>
        </div>
        <img src={image} alt="" />
        <button onClick={onAddItemToBasket}>
          <i>
            <ShoppingCartOutliedIcon></ShoppingCartOutliedIcon>
          </i>
          Add to Basket
        </button>
      
    </div>
  );
};

export default Product;
