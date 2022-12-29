import React, { useState, useEffect } from 'react'
import {BsCart4, BsFillCreditCardFill} from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb';
import {BiChevronDown} from 'react-icons/bi';
import {IoMdChatboxes} from 'react-icons/io';
import {AiFillFacebook, AiOutlineTwitter, AiFillYoutube, AiFillLinkedin, AiFillDribbbleCircle} from 'react-icons/ai';
import './Footer.css'

function Footer() {

    const [footerNav, setFooterNav] = useState(true)
    const [footerNav1, setFooterNav1] = useState(true)
    const [footerNav2, setFooterNav2] = useState(true)

    const footerHandler = () => {
        console.log('Dem don click the footer side o!')
        setFooterNav(!footerNav)

      }
    const footerHandler1 = () => {
        console.log('Dem don click the footer side o!')
        setFooterNav1(!footerNav1)
        
      }
    const footerHandler2 = () => {
        console.log('Dem don click the footer side o!')
        setFooterNav2(!footerNav2)
        
      }

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
    <div className='footer container'>
        <div className='footerside-1'>
            <div className='icon-and-stuff'>
                <div className='icon'>
                    <TbTruckDelivery className='icon-2ce search-icon-2 icon-light' />
                </div>
                <div>
                    <h3 className='footer-top-h3'>FREE DELIVERY</h3>
                    <p className='footer-top-p'>For all orders over $120</p>
                </div>
            </div>
            <div className='icon-and-stuff'>
                <div className='icon'>
                    <BsFillCreditCardFill className='icon-2ce search-icon-2 icon-light' />
                </div>
                <div>
                    <h3 className='footer-top-h3'>SAFE PAYMENT</h3>
                    <p className='footer-top-p'>100% secure payment</p>
                </div>
            </div>
            <div className='icon-and-stuff'>
                <div className='icon'>
                    <IoMdChatboxes className='icon-2ce search-icon-2 icon-light' />
                </div>
                <div>
                    <h3 className='footer-top-h3'>24/7 HELP CENTER</h3>
                    <p className='footer-top-p'>If goods have problems</p>
                </div>
            </div>
            <div className='icon-and-stuff'>
                <div className='icon'>
                    <BsCart4 className='icon-2ce search-icon-2 icon-light' />
                </div>
                <div>
                    <h3 className='footer-top-h3'>SHOP WITH CONFIDENCE</h3>
                    <p className='footer-top-p'>If goods have problems</p>
                </div>
            </div>
        </div>
        <div className='footerside-2'>
            <div className='footerside-2b1'>
                <h2 className='footerside-2h'>Download App</h2>
                <p className='footerside-2p'>Dukamarket App is now available on App Store & Google Play. Get it now</p>
                <div className='share-icons'>
                    <div className='share-icon-container b'><AiFillFacebook className='icon-2ce search-icon-2 icon-light' /></div>
                    <div className='share-icon-container bb'><AiOutlineTwitter className='icon-2ce search-icon-2 icon-light' /></div>
                    <div className='share-icon-container w'><AiFillYoutube className='icon-2ce search-icon-2 icon-light' /></div>
                    <div className='share-icon-container p '><AiFillLinkedin className='icon-2ce search-icon-2 icon-light' /></div>
                    <div className='share-icon-container r'><AiFillDribbbleCircle className='icon-2ce search-icon-2 icon-light' /></div>
                </div>
            </div>
            <div className='footerside-2b2'>{windowSize.innerWidth > 480?
                <>
                <h2 className='footerside-2h'>My Account</h2>
                <p className='footerside-2p'>Search</p>
                <p className='footerside-2p'>Product Support</p>
                <p className='footerside-2p'>Checkout</p>
                <p className='footerside-2p'>Shopping Cart</p>
                <p className='footerside-2p'>Whishlist</p>
                <p className='footerside-2p'>New Arrivals</p>
                </>

                :
                <>
                <div className='footerside-2h-withd'>
                    <h2 className='footerside-2h'>My Account</h2> 
                    <div><BiChevronDown className='icon-2ce search-icon-2 icon-light' onClick={footerHandler} /></div>
                </div>
                <div className='nav-dropped' style = {footerNav ? {display: 'none'} : {display: 'block'}}>
                <p className='footerside-2p'>Search</p>
                <p className='footerside-2p'>Product Support</p>
                <p className='footerside-2p'>Checkout</p>
                <p className='footerside-2p'>Shopping Cart</p>
                <p className='footerside-2p'>Whishlist</p>
                <p className='footerside-2p'>New Arrivals</p>
                </div>
                </>
                


            }
            </div>
            <div className='footerside-2b3'>
            {windowSize.innerWidth > 480?
                <>
                <h2 className='footerside-2h'>Customer Service</h2>
                <p className='footerside-2p'>Help Center</p>
                <p className='footerside-2p'>Contact Us</p>
                <p className='footerside-2p'>Report Abuse</p>
                <p className='footerside-2p'>Submit a Dispute</p>
                <p className='footerside-2p'>Policies & Rules</p>
                <p className='footerside-2p'>Online Shopping</p>
                </>

                :
                <>
                <div className='footerside-2h-withd'>
                    <h2 className='footerside-2h'>Customer Service</h2>
                    <div><BiChevronDown className='icon-2ce search-icon-2 icon-light' onClick={footerHandler1} /></div>
                </div>
                <div className='nav-dropped' style = {footerNav1 ? {display: 'none'} : {display: 'block'}}>
                <p className='footerside-2p'>Help Center</p>
                <p className='footerside-2p'>Contact Us</p>
                <p className='footerside-2p'>Report Abuse</p>
                <p className='footerside-2p'>Submit a Dispute</p>
                <p className='footerside-2p'>Policies & Rules</p>
                <p className='footerside-2p'>Online Shopping</p>
                </div>
                </>
                


            }






                
            </div>
            <div className='footerside-2b4'>
            {windowSize.innerWidth > 480?
                <>
                <h2 className='footerside-2h'>Hot Categories</h2>
                <p className='footerside-2p'>Laptop & Computer (17)</p>
                <p className='footerside-2p'>Speaker & Audio (8)</p>
                <p className='footerside-2p'>Cellphone (11)</p>
                <p className='footerside-2p'>Video Game (18)</p>
                <p className='footerside-2p'>Accessories (12)</p>
                <p className='footerside-2p'>Delivery & Dispatch</p>
                </>

                :
                <>
                <div className='footerside-2h-withd'>
                    <h2 className='footerside-2h'>Hot Categories</h2>
                    <div><BiChevronDown className='icon-2ce search-icon-2 icon-light' onClick={footerHandler2} /></div>
                </div>
                <div className='nav-dropped' style = {footerNav2 ? {display: 'none'} : {display: 'block'}}>
                <p className='footerside-2p'>Laptop & Computer (17)</p>
                <p className='footerside-2p'>Speaker & Audio (8)</p>
                <p className='footerside-2p'>Cellphone (11)</p>
                <p className='footerside-2p'>Video Game (18)</p>
                <p className='footerside-2p'>Accessories (12)</p>
                <p className='footerside-2p'>Delivery & Dispatch</p>
                </div>
                </>



            }
                
            </div>
            <div className='footerside-2b5'>
                <h2 className='footerside-2h'>Subscribe To Our Newsletter</h2>
                <p className='footerside-2p'>Join 60.000+ subscribers and get a new discount coupon on every Saturday.</p>
                <input type="email" name="email" id="email" placeholder='Please put in your email...' className='footer-search-bar' />
            </div>
        </div>
        <div className='footerside-3'>
            <div className='last-footer-side'>
                <p className='footerside-2p'>ONLINE</p>
                <p className='footerside-2p'>SHOPPING</p>
                <p className='footerside-2p'>PROMOTIONS</p>
                <p className='footerside-2p'>MY ORDERS</p>
                <p className='footerside-2p'>HELP</p>
                <p className='footerside-2p'>CUSTOMER SERVICE</p>
                <p className='footerside-2p'>SUPPORT</p>
            </div>
            <p className='f-text'>Web Project for Ladipo David and Praise Precious &copy; 2022</p>
        </div>
    </div>
  )
}


function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

export default Footer