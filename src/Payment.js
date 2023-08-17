import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import "./payment.css"
import {useStateValue} from './StateProvider';
import {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { CardElement, useStripe,useElements} from "@stripe/react-stripe-js";
import { getBasketTotal } from './reducer';
import CurrencyFormat from "react-currency-format";
import axios from './axios';
import {db} from './firebase';

function Payment() {
    const [{basket, user}, dispatch]= useStateValue();
   
     const history = useHistory();
     const stripe = useStripe();
     const elements = useElements();

     const [error, setError] = useState(null);
     const [disable, setDisable] = useState(true);
     const [succeeded , setSucceeded] = useState(false);
     const [processing, setProcessing] = useState("");
     const [clientSecret, setClientSecret] = useState(true);

     useEffect(() => {
          const getClientSecret = async () => {
              const response = await axios ({
                  method: 'post',
                  url: '/payments/create?total=${getBasketTotal(basket) * 100}'
              });
              setClientSecret(response.data.clientSecret)
          }
          getClientSecret();
     },[basket])

       console.log('The Secret Is',clientSecret)
     const handleSubmit = async (event) =>{
         event.preventDefault();
         setProcessing(true);

         const payload = await stripe.confirmCardPayment(clientSecret,{
             payment_method: {
                 card: elements.getElement(CardElement)
             }
         }).then(({paymentIntent}) => {
             //paymentIntent = Payment confirmation
               db.collection('users')
               .doc(user?.uid)
               .collection('orders')
               .doc(paymentIntent.id)
               .set({
                   basket:  basket,
                   amount: paymentIntent.amount,
                   created: paymentIntent.created
               })


             setSucceeded(true);
             setError(null)
             setProcessing(false)

             dispatch({
                 type: "EMPTY_BASKET"
             })

             history.replace('/orders')
         })
     }
     const handleChange = event =>{
        setDisable(event.empty);
        setError(event.error ? event.error.message: "");
     }
  return (
    <div  className="payment">
        <div className="payment_container">
            <h1>
                Checkout(
                    <Link to='/checkout'>{basket?.length} items</Link>
                )

            </h1>
              <div className='payment_section'>
                   <div className='payment_title'>
                       <h3>Delivery Address</h3>
                   </div>
                   <div className='payment_address'>
                       <p>{user?.email}</p>
                       <p>456 React Lane</p>
                       <p>Texas,USA.</p>
                   </div>
              </div>

            {/*payement Review Items*/}
               <div className='payment_section'>
                   <div className='payment_title'>
                      <h3>Review item and delivery</h3>
                         
                    </div>
                    <div className='payment_items'>
                        {basket.map(item =>(
                            <CheckoutProduct
                             id={item.id}
                             title={item.title}
                             image={item.image}
                             price={item.price}
                             rating={item.rating}
                             />
                        ))}
                    </div>
                  
                </div>

            {/*payement Payment method*/}
               <div className='payment_section'>
                  <div className='payment_title'>
                      <h3>Payment Method</h3>
                  </div>
                   <div className='payment_details'>
                       {/*stripe magic */}
                       <form onSubmit={handleSubmit}>
                           <CardElement onChange={handleChange} />

                           <div className='payment_priceCont'>
                               <CurrencyFormat 
                               renderText={(value) =>(
                                   <>
                                   <h3>Order Total : {value}</h3>
                                   </>
                               )}
                               decimalScale={2}
                               value = {getBasketTotal(basket)}
                               displayType={"text"}
                               thousandSeperator={true}
                               prefix={"$"}
                               />
                              <button disable={processing || disable || succeeded}>
                                  <span>{processing ? <p>Processing</p>:"Buy now"}</span>
                              </button>
                              
                           </div>
                           {error && <div>{error}</div>}
                       </form>
                   </div>
                  
                </div>
        </div>

 
    </div>

  )
}

export default Payment