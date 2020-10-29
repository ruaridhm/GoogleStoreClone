import React from 'react';
import './OrderBanner.css';

const OrderBanner = () => {
  return (
    <div className='promo-container'>
      <div className='promo-text'>
        Pre-Order Google Pixel 4a (5G) between 5/11/2020 and 18/11/2020 (limited
        stock offer) and receive a pair of Bose headphones on us.
      </div>
      <a className='banner-link' href='/'>
        Learn More.
      </a>
    </div>
  );
};

export default OrderBanner;
