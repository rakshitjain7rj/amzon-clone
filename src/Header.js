import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';


function Header() {

  const [{basket} ,dispatch] = useStateValue()
  return (
    <div className='header'>
     <Link to='/'>
      <img className='header__logo'src="https://static.vecteezy.com/system/resources/previews/019/040/342/non_2x/amazon-logo-editorial-free-vector.jpg" alt="#" />
      </Link>
      
<div className="header__search">
  <input className='header__searchInput' type="text" />
</div>

<div className="header__nav">
  <Link to='/login'>
  <div className="header__option">
    <span className='header__optionLineOne'>Hello Guest</span>
    <span className='header__optionLineTwo'>Sign In</span>
  </div>
  </Link>

  <div className="header__option">
<span className="header__optionLineOne">Returns</span>
<span className="header__optionLineTwo">& Orders</span>
  </div>

  
<div className="header__option">
  
<span className="header__optionLineOne">Your</span>
<span className="header__optionLineTwo">Prime</span>
  
</div>
<Link to='/checkout'>
<div className="header__optionBasket">
  <span className='header__optionLineTwo header__basketcount'>{basket.length}</span>
</div>
</Link>


</div>


    </div>
  )
}

export default Header
