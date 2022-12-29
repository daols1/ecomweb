import React, { useState, useEffect } from 'react';
import {BsPerson, BsHeart, BsCart4} from 'react-icons/bs';
import {BiSearchAlt} from 'react-icons/bi'
import {HiOutlineMenuAlt2, HiOutlineX} from 'react-icons/hi'
// import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo-light.png'
import './NavBarSearch.css'
// import NavBarMain from '../NavBarMain/NavBarMain';

function NavBarSearch({navhandler, navOpen}) {

  // Logic for the hamburger

  // const [navShow, setNavShow] = useState(false)
  // const [size, setSize] = useState(false)
  // const style = navShow ? {display:'none'} : {display:'flex'}
  // const widthChecker = window.matchMedia('(max-width: 600px)');

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);





  return (

    
    <>
    {windowSize.innerWidth < 600?
    <div className='nav-search-main container nsm-small-screen'>
      <div className='drop-down-menu'>
        
      </div>
      <div className='small-screen-menu-container'>
        <div className='hamburger-small-screen'>{navOpen? <HiOutlineMenuAlt2 onClick = {navhandler} className='hamburger-small-screen-itself icon-small-screen' /> : <HiOutlineX onClick = {navhandler} className='hamburger-small-screen-itself icon-small-screen' /> }</div>
        <div className=''>
          <img src={Logo} alt="" className="logo l-small-screen" />
        </div>
        <div className='cart-container'><BsCart4 className='icon-small-screen' /><span className='cart-number'>0</span></div>
      </div>
      {/* <div className='drop-down-menu'>
        <NavBarMain className='' />
      </div> */}
    </div>
    
    :
    
    <div className='nav-search-main container'>
      <div className='logo'>
        <img src={Logo} alt="" className="logo" />
      </div>
      <div className='search-bar'>
        <form action="" className='search-bar-and-icon'>
          <input placeholder='Search Products...' className='search-bar-main' /><BiSearchAlt className='search-icon' />
        </form>
      </div>
      <div className='search-bar-list'>
        <div className='icon-and-stuff'>
          <div><BsPerson className='icon-2ce search-icon-2 icon-light' /></div>
          <div className='icon-txt'>
            <p className='greyed'>Login</p>
            <p>Login/Register</p>
          </div>
        </div>
        <div className='icon-and-stuff'>
          <div><BsHeart className='icon-2ce search-icon-2 icon-light' /></div>
          <div className='icon-txt'>
            <p className='greyed'>Favorite</p>
            <p>My Whishlist</p>
          </div>
        </div>
        <div className='icon-and-stuff'>
          <div className='cart-container'><BsCart4 className='icon-2ce search-icon-2 icon-light' /><span className='cart-number'>0</span></div>
          <div className='icon-txt'>
            <p className='greyed'>Your Cart</p>
            <p>$0.00</p>
          </div>
        </div>
      </div>
    </div>
    }
    </>
  )
}

function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}

export default NavBarSearch