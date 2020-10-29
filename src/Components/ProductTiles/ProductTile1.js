import React from 'react';
import './ProductTile.css';
import Button from '../Button/Button';

const ProductTile1 = ({ title, description, btnText, image }) => {
  return (
    <div
      className='product-tile-1'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className='product-tile-1-text-container'>
        <div className='product-tile-1-text-title'>{title}</div>
        <div className='product-tile-1-text-description'>{description}</div>
        <Button>{btnText}</Button>
      </div>
    </div>
  );
};

export default ProductTile1;
