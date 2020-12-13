import React from 'react'
import './MyList.css';
import MyListItem from './MyListItem';
import { selectUser } from './features/userSlice';
import { cartRedux } from './features/cartSlice';
import { useSelector } from 'react-redux';

function MyList() {
  const cart = useSelector(cartRedux);
  const user = useSelector(selectUser);
  return (
    <div className='checkout'>
      <div className="checkout__left">


        {cart?.length === 0 ? (
          <div>
            <h2>Your Amazon Cart is empty</h2>
            <p>
              You have no items in you cart. To buy one or more items, click "Add to cart" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h3>Hello, {user?.displayName}</h3>
            <h2 className='checkout__title'>Shopping Cart</h2>
            {cart.map(item => (
              <MyListItem 
                id={item.id}
                title={item.title}
                uuid={item.uuid}
                name={item.name}
                imageSrc={item.imageSrc}
              />
            ))}          
          </div>
        )}        
    </div>
   
  </div>
  )
}

export default MyList