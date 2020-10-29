import React from 'react';
import './ProductTile.css';
import Button from '../Button/Button';

const ProductTile3 = ({ title, description, btnText, image, sup }) => {
  return (
    <div className='product-tile-3'>
      <div className='product-tile-3-text-container'>
        <div className='product-tile-3-text-title'>{title}</div>
        <div className='product-tile-3-text-description'>
          {description}
          <sup className='product-tile-3-sup'>{sup}</sup>
        </div>
        <Button>{btnText}</Button>
      </div>
      <img className='product-tile-3-img' src={image} alt={title} />
    </div>
  );
};

export default ProductTile3;
