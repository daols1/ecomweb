import React, {useState, useEffect} from 'react';
import NavBarLead from '../NavBarLead/NavBarLead'
import NavBarSearch from '../NavBarSearch/NavBarSearch'
import NavBarMain from '../NavBarMain/NavBarMain'
import './NavBarAll.css'

function NavBarAll() {

  const [navOpen, setNavOpen] = useState(true)

  const navhandler = () => {
    console.log('Dem don click the nav opener o!')
    setNavOpen(!navOpen)
    
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
    <div>
        <NavBarLead />
        <NavBarSearch navhandler = {navhandler} navOpen = {navOpen} />
        {windowSize.innerWidth > 600 ?
          <NavBarMain />
        :
          <NavBarMain navOpen = {navOpen}/>
        }
    </div>
  )
}



function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}

export default NavBarAll;