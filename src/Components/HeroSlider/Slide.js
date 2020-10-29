import React from 'react';
import Button from '../Button/Button';

const Slide1 = ({
  title,
  description,
  subDescription,
  background,
  btnText,
  sup,
  supPosition,
}) => {
  return (
    <div
      className='hero-slide'
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className='hero-slide-text-wrapper'>
        <div className='slide-title'>
          {title}
          {supPosition === 'title' ? (
            <sup className='slide-sup-title'>{sup}</sup>
          ) : (
            ''
          )}
        </div>
        <div className='slide-description'>
          {description}
          {supPosition === 'description' ? (
            <sup className='slide-sup-description'>{sup}</sup>
          ) : (
            ''
          )}
        </div>
        <div className='slide-sub-description'>{subDescription}</div>
        <Button>{btnText}</Button>
      </div>
    </div>
  );
};

export default Slide1;
