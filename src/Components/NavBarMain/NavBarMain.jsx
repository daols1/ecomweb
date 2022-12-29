import React from 'react';
import {BsMenuButtonWide} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import './NavBarMain.css'
// import {IoIosArrowDown} from 'react-icons/io'


function NavBarMain({navOpen}) {
  return (
    <div className='nav-bar-main container' style = {navOpen ? {display: 'none'} : {display: 'flex'}} >
      <div className='nav-and-categories'>
        <div className='icon-and-categories'><BsMenuButtonWide className='icon icon-pad icon-1ce' />Shop By Categories</div>
        <ul className='nav-bar-main-flex'>
          <li><Link to = '/' className='linked' onClick={!navOpen}>Home</Link></li>
          <li><Link to = '/shop' className='linked' onClick={!navOpen}>Shop</Link></li>
          <li><Link to = '/blog' className='linked' onClick={!navOpen}>Blog</Link></li>
          <li><Link to = '/about' className='linked' onClick={!navOpen}>About Us</Link></li>
          <li><Link to = '/contact' className='linked' onClick={!navOpen}>Contact Us</Link></li>
        </ul>
      </div>
      <div className='nav-bar-main-side-2'>
        Spend $120 more and get free shipping!
      </div>
    </div>
  )
}

export default NavBarMain