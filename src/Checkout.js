import React from 'react';
import "./Checkout.css";
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';


function Checkout() {
  const [{basket} , dispatch] = useStateValue();
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img  className='checkout__ad 'src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/LATV/1071374_750x200_8._V515060851_.jpg" alt="#" />


        <div>
          
        <h2 className='checkout__title'>Your Shopping Basket.</h2>

        {basket.map(item => (
          <CheckoutProduct
            id ={item.id}
            title={item.title}
            image={item.image}
            price={item.price}


          />
        ))}

        </div>

        <div className="checkout__right">
          <Subtotal basket={basket}/>
          
          <h2>The subtotal component</h2>
        </div>

      </div>
    </div>
  )
}

export default Checkout
