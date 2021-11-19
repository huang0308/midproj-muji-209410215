import React from 'react';
import { Link } from 'react-router-dom';
import './Header_15.scss';
import { ReactComponent as Logo } from '../assets/crown.svg';

const Header_15 = () => {
  return (
    <div>
      <div className='header'>
        <Link to='/' className='logo-container'>
          <Logo />
        </Link>
        <div className='options'>
          <Link to='/api_15/shop_15' className='option'>
            Shop
          </Link>
          <Link to='/contact_15' className='option'>
            Contact
          </Link>
          <Link to='/signin_15' className='option'>
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header_15;
