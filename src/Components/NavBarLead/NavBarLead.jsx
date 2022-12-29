// import React, { useState } from 'react';
import './NavBarLead.css'
import {IoIosArrowDown} from 'react-icons/io'

function NavBarLead() {

  // Hover logic
  // const [show, setShow] = useState(false)

  // const st = {
  //   display:'flex',
  // }

  return (
    // This is the leading nav bar which is divided into two parts
    <div className='lead-main container'>
      {/* This is the first side */}
      <div className='nav-lead-side-1'>
        <ul className='nav-lead-list nav-lead-list-1'>
          {/* {show ? 
          <ul className='dropdown-lead-lists' style={st}>
            <li className='default-show'>USD</li>
            <li className='default-show'>EUR</li>
            <li className='default-show'>JPY</li>
            <li className='default-show'>USD</li>
            <li className='default-show'>USD</li>
            <li className='default-show'>USD</li>
          </ul>
          :null} */}
          <li className='center-txt hovered'
          // onMouseEnter={() => setShow(true)}
          // onMouseLeave ={() => setShow(false)}
          >USD<IoIosArrowDown /></li>
          <li className='center-txt'>EN <IoIosArrowDown /></li>
          <li>Need Help?+001 123 456 789</li>
        </ul>
      </div>
      {/* End of first side */}
      {/* Start of second side */}
      <div className='nav-lead-side-2'>
          <ul className='nav-lead-list nav-lead-list-2'>
            <li>My Account</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>FAQs</li>
          </ul>
      </div>
      {/* End of second side */}
    </div>
  )
}

export default NavBarLead