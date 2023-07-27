import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
     <div className="home__container">
      <img className='home__image' src="https://i.ytimg.com/vi/ZMdJ_KnD1Dw/maxresdefault.jpg" alt="#" />
    <div className="home__row">
      <Product title="The lean startup"
               price={29.99}
               image="https://media.shortform.com/covers/png/the-lean-startup-cover@8x.png" id={Date.now()}/>
      <Product title="Rich Dad Poor Dad " price={19.99} image="https://5.imimg.com/data5/HB/LA/MY-11183377/rich-dad-poor-dad.png" id={Date.now()}/>
      
     
    </div>

    <div className="home__row">
     <Product title="Atomic Habits" image="https://5.imimg.com/data5/SELLER/Default/2021/8/US/XL/ZL/133456484/atomic-habits-the-life-changing.jpg" price={15.99} id={Date.now()}/>
     <Product title="The 5 A.M Club" image="https://5.imimg.com/data5/SELLER/Default/2023/1/TQ/BL/FQ/182186122/the-5am-club-book.jpeg" price={9.99} id={Date.now()}/>
     <Product title="Eat that frog" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUBsf7us5hB0MWEfrjgj8J9BrBzX6kcxUKi2NNBbrwY5nm-2M_M1cM3RZAvMce0mHJvDQ&usqp=CAU" price={17.99} id={Date.now()}/>
     
    </div>

    <div className="home__row">
      <Product title="Bhagavad Gita " image="https://www.crafttrip.in/image/cache/catalog/sri-krishna-arjun/Lord-Krishna-Arjun-on-Chariot-Mahabrat-Painting-800x534w.jpg" price={99.99} id={Date.now()}/> 
    </div>
  

     </div>
    
    </div>
  )
}

export default Home
