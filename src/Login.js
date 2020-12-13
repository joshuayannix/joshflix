import React from 'react';
import './Login.css'
import joshflix from './joshflix.png';
import { Link, useHistory } from 'react-router-dom';
import { auth, provider } from './firebase';

function Login() {
  const history = useHistory();

  const signIn = e => {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then(auth => {
        history.push('/')
      })
      .catch(error => alert(error.message))
  }

  return (
    <div className='login' >
      <div className="overlay">

      </div>

      <div className='login__header'>
        <Link to ='/'>
            <img 
              src={joshflix} 
              alt="joshflix logo"
              className='login__logo'
            />                
        </Link>
      </div>  

      <div className="login__container">
        <h1>Sign In</h1>
        <form action="">          
          <button 
            className='login__signInButton'
            onClick={signIn}
            type='submit'
          >
            Sign In With Google
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
