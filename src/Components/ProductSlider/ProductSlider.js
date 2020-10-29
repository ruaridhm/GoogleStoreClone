import React from 'react';
import SliderTile from './SliderTile';
import './ProductSlider.css';
import accessories from '../../Images/product slider/accessories.png';
import chromecasttv from '../../Images/product slider/chromecast with google tv.png';
import chromecast from '../../Images/product slider/chromecast.png';
import nestAudio from '../../Images/product slider/nest audio.png';
import nestHub from '../../Images/product slider/nest hub.png';
import nestMini from '../../Images/product slider/nest mini.png';
import nestWifi from '../../Images/product slider/nest wifi.png';
import pixelBuds from '../../Images/product slider/pixel buds.jpg';
import pixelStand from '../../Images/product slider/pixel stand.png';
import pixel3a from '../../Images/product slider/pixel3a.png';
import pixel4 from '../../Images/product slider/pixel4.png';
import pixel4a5g from '../../Images/product slider/pixel4a with 5g.png';
import pixel4a from '../../Images/product slider/pixel4a.png';
import pixel5 from '../../Images/product slider/pixel5.png';
import stadia from '../../Images/product slider/stadia.png';

const ProductSlider = () => {
  return (
    <div>
      <ul className='slider'>
        <SliderTile title='Pixel 5' image={pixel5} link='' />
        <SliderTile title='Pixel 4a with 5G' image={pixel4a5g} link='' />
        <SliderTile title='Nest Audio' image={nestAudio} link='' />
        <SliderTile
          title='Chromecast with Google TV'
          image={chromecasttv}
          link=''
        />
        <SliderTile title='Pixel 4a' image={pixel4a} link='' />
        <SliderTile title='Nest Wifi' image={nestWifi} link='' />
        <SliderTile title='Pixel Buds' image={pixelBuds} link='' />
        <SliderTile title='Chromecast' image={chromecast} link='' />
        <SliderTile title='Pixel 4' image={pixel4} link='' />
        <SliderTile title='Nest Mini (2nd gen)' image={nestMini} link='' />
        <SliderTile title='Stadia Premiere Edition' image={stadia} link='' />
        <SliderTile title='Nest Hub' image={nestHub} link='' />
        <SliderTile title='Pixel 3a' image={pixel3a} link='' />
        <SliderTile title='Pixel Stand' image={pixelStand} link='' />
        <SliderTile title='Accessories' image={accessories} link='' />
      </ul>
      {/* <div className='slideBar'>
        <div className='slideBar-slider'></div>
      </div> */}
    </div>
  );
};

export default ProductSlider;
