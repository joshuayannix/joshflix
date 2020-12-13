import React, { useState, useEffect } from 'react';
import './Nav.css';
import joshflix from './joshflix.png';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { Link } from 'react-router-dom';

function Nav() {
  const user = useSelector(selectUser);

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }

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

      <Link to='/'>      
        <img  
          className='nav__logo' 
          src={joshflix} 
          alt="amazon logo"
        />
      </Link> 

      
      
    </div>
  )
}

export default Nav
