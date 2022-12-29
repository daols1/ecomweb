import React from 'react'
import { Outlet } from 'react-router-dom';  
import Footer from '../Footer/Footer';
import NavBarAll from '../NavBarAll/NavBarAll';


function Sharedlayout() {
  return (
    <>
        <NavBarAll />
          <Outlet />
        <Footer />
    </>
  )
}

export default Sharedlayout