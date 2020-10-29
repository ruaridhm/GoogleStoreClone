import React from 'react';

const SliderTile = ({ title, image, link }) => {
  return (
    <a href={link} className='product-tile'>
      <img className='product-tile-image' src={image} alt={title} />
      <div className='product-tile-title'>{title}</div>
    </a>
  );
};

export default SliderTile;
