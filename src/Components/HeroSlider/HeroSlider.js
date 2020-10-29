import React, { useEffect, useState } from 'react';
import './HeroSlider.css';
import Slide from './Slide';
import HeroBackground1 from '../../Images/HeroSlide1.jpg';
import HeroBackground2 from '../../Images/HeroSlide2.jpg';
import HeroBackground3 from '../../Images/HeroSlide3.jpg';

const HeroSlider = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    const sliderTimer = setInterval(() => {
      console.log(activeSlide);
      if (activeSlide < 3) {
        setActiveSlide(activeSlide + 1);
      } else {
        console.log('else');
        setActiveSlide(1);
        console.log(activeSlide);
      }
    }, 1000);
  }, []);

  const sliderButtonHandler = (slideNumb) => {
    setActiveSlide(slideNumb);
  };

  return (
    <div className='hero-slider'>
      {activeSlide === 1 && (
        <Slide
          title='Pixel 5 and Pixel 4a with 5G'
          description='Putting the G in 5G.'
          subDescription='Meet the newest Pixel phones.'
          btnText='Learn more'
          background={HeroBackground1}
          sup='1'
          supPosition='description'
        />
      )}
      {activeSlide === 2 && (
        <Slide
          title='Nest Audio'
          description='The helpful speaker that’s all about sound.'
          btnText='Learn more'
          background={HeroBackground2}
          sup='2'
          supPosition='description'
        />
      )}
      {activeSlide === 3 && (
        <Slide
          title='The new Chromecast with Google TV'
          description='Entertainment that you love. With a little help from Google.'
          btnText='Learn more'
          background={HeroBackground3}
          supPosition='title'
          sup='3'
        />
      )}
      <div className='slider-button-container'>
        <div
          className={`slider-btn ${activeSlide === 1 ? 'active' : ''}`}
          onClick={() => sliderButtonHandler(1)}
        ></div>
        <div
          className={`slider-btn ${activeSlide === 2 ? 'active' : ''}`}
          onClick={() => sliderButtonHandler(2)}
        ></div>
        <div
          className={`slider-btn ${activeSlide === 3 ? 'active' : ''}`}
          onClick={() => sliderButtonHandler(3)}
        ></div>
      </div>
    </div>
  );
};

export default HeroSlider;
