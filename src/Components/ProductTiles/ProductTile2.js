import React from 'react';
import Button from '../Button/Button';
import './ProductTile.css';

const ProductTile2 = ({ title, description, btnText, video, sup }) => {
  return (
    <div className='product-tile-2'>
      <div className='product-tile-2-text-container'>
        <div className='product-tile-2-text-title'>{title}</div>
        <div className='product-tile-2-text-description'>
          {description}
          <sup className='product-tile-2-sup'>{sup}</sup>
        </div>
        <Button>{btnText}</Button>
      </div>
      <video className='product-tile-video'>
        <source src={video} type='video/mp4'></source>
      </video>
    </div>
  );
};

export default ProductTile2;
