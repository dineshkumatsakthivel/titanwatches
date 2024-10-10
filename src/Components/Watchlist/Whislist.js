import React, { useState, useEffect } from 'react';
import './Whislist.css';
import { FaShoppingCart } from "react-icons/fa";

const Watchlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(savedWishlist);
  }, []);

  const removeFromWishlist = (item) => {
    const updatedWishlist = wishlist.filter(watch => watch !== item);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  return (
    <div className='wishlist-page'>
      <h2>Your Wishlist</h2>
      {wishlist.length > 0 ? (
        wishlist.map((item, index) => (
          <div key={index} className='wishlist-item'>
            <span>{item}</span>
            <button onClick={() => removeFromWishlist(item)}>Remove</button>
            <button className='add-to-cart'><FaShoppingCart /> Add to Cart</button>
          </div>
        ))
      ) : (
        <div>No items in your wishlist</div>
      )}
    </div>
  );
}

export default Watchlist;
