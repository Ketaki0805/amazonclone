import React from 'react';
import "./CheckoutProduct.css";
import {useStateValue} from "./StateProvider";


function CheckoutProduct({image,title,rating,price}) {
  const [{basket},dispatch]= useStateValue();
  const removefromBasket = () =>{
    dispatch ({
       type:'REMOVE_FROM_BASKET',
       price:price,
    })

  }
  return (
    <div className='checkoutProduct'>
       <img className='checkoutProduct_image' src={image} />
         
       
      <div className='checkoutProduct_info'>
          <p className='checkoutProduct_title'>{title}</p>
          <p className='checkoutProduct_price'>
              <small>$</small>
              <strong>{price}</strong>
          </p>

            <div className='checkoutProduct_rating'>
                {Array(rating)
                .fill()
                .map((_,i)=>(
                    <p>⭐</p>
                ))}
                


            </div>
              <button onClick={removefromBasket}>Remove from Basket</button>
      </div>

    </div>

       
  )
}

export default CheckoutProduct