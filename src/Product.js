import React from "react";
import "./Product.css";
import {useStateValue} from "./StateProvider";

function Product({title,image,price,rating}){
    const [{basket},dispatch]=useStateValue();
    
    const addToBasket = () => {
        //dispatch the item
        dispatch({
            type: 'ADD TO BASKET',
            item: {
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };
    return(
        <div className="product">
            <div className="product_info" >
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                 <div className="product_rating">
                     {Array(rating).fill().map((_,i)=>
                     (
                    <p>⭐</p>
                     ))}
                    
                 </div>
                 
            </div>
            <img src={image} alt=""/>
              <button onClick={addToBasket}>Add to Basket</button>
        </div>
    );
}
export default Product