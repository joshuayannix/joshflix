import React, { useState, useEffect } from 'react';
import './Nav.css';
import joshflix from './joshflix.png';
import { auth } from './firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import { cartRedux } from './features/cartSlice';

function Nav() {
  const user = useSelector(selectUser);
  const list = useSelector(cartRedux);
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }

  const [show, handleShow] = useState(false);

  const scrollHandler = e => {
    if(window.scrollY > 100) {
      handleShow(true);
    } else handleShow(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <div 
      className={`nav ${show && 'nav__black'}`}
    >     
      <Link to='/'>      
        <img  
          className='nav__logo' 
          src={joshflix} 
          alt="netflix logo"
        />
      </Link> 

      <div className="header__nav">
        {user ? (
          <>
            <Link 
              to='/my-list'
              className='nav__link__white'
            >
              <span className='nav__myList'>My List: {list?.length}</span>
            </Link>

            <Avatar           
              src={user.photo} 
              className='nav__avatar'
            /> 
          </>
        ) : (
          <div></div>
        )}
        
        <Link 
          to={!user && '/login'} 
          className='nav__link__white'
        >
          <div 
            onClick={handleAuthentication}
            className="header__option"
          >
            <span className='nav__username'>Hello, {user ? user.displayName : 'Guest. Sign In'}</span>
            
          </div>
        </Link>                   
      </div>   
      
    </div>
  )
}

export default Nav
