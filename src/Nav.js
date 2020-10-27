import React, { useState, useEffect } from 'react';
import './Nav.css';
import joshflix from './joshflix.png';

function Nav() {

  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>      
      <img 
        src={joshflix}
        alt='netflix logo'
        className='nav__logo'        
      />
      <img 
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png" alt="netflix profile icon"
        className='nav__avatar'
      />
    </div>
  )
}

export default Nav
