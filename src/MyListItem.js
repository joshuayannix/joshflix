import React from 'react';
import './MyListItem.css';
import { useDispatch } from 'react-redux';
import { removeFromCart } from './features/cartSlice';

function MyListItem({ name, uuid, imageSrc, title }) {

  const dispatch = useDispatch();
  
  const removeFromCartCheckout = () => {    
    dispatch(removeFromCart({
      id: uuid
    }))
  }

  return (
    <div className='checkoutProduct'>

      <img className='checkoutProduct__image' src={imageSrc} alt=""/>

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{name}</p>

        <button 
          onClick={removeFromCartCheckout}
          className='checkoutProduct__button'
        >
          Remove from My List
        </button>
      </div>

    </div>
  )
}

export default MyListItem
