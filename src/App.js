import React, { useState } from 'react';
import './App.css';
import HeroSlider from './Components/HeroSlider/HeroSlider';
import Nav from './Components/Nav/Nav';
import OrderBanner from './Components/OrderBanner/OrderBanner';
import ProductSlider from './Components/ProductSlider/ProductSlider.js';
import ProductTile1 from './Components/ProductTiles/ProductTile1.js';
import ProductTile2 from './Components/ProductTiles/ProductTile2';
import ProductTile3 from './Components/ProductTiles/ProductTile3';
import CrmModule from './Components/CrmModule/CrmModule';
import FootNotes from './Components/FootNotes/FootNotes';
import Footer from './Components/Footer/Footer';
import NavMenu from './Components/Nav/NavMenu';

import homeSubCategories from './Components/Nav/pages/NavHome';
import phoneSubCategories from './Components/Nav/pages/NavPhone';
import gamingSubCategories from './Components/Nav/pages/NavGaming';
//Videos
import pixel5Vid from './Videos/pixel5.mp4';
import pixel4aVid from './Videos/pixel4a.mp4';
//Images
import pixel4aImg from './Images/Pixel4a.jpg';
import nestWifiImg from './Images/NestWifi.jpg';
import nestHubImg from './Images/NestHub.jpg';
import nestMiniImg from './Images/NestMini.jpg';

function App() {
  const [activeNav, setActiveNav] = useState({
    phones: false,
    home: false,
    gaming: false,
  });

  return (
    <div className='App'>
      <OrderBanner />
      <Nav activeNav={activeNav} setActiveNav={setActiveNav} />
      {activeNav.phones ? (
        <NavMenu
          menuTitle='Phone'
          exploreBtn={true}
          subCategories={phoneSubCategories}
          rightLinks={['Switch to Pixel', 'Help Centre']}
        />
      ) : (
        ''
      )}
      {activeNav.home ? (
        <NavMenu
          menuTitle='Connected Home'
          exploreBtn={true}
          subCategories={homeSubCategories}
          rightLinks={['Help Centre']}
        />
      ) : (
        ''
      )}
      {activeNav.gaming ? (
        <NavMenu
          menuTitle='Gaming'
          exploreBtn={false}
          subCategories={gamingSubCategories}
          rightLinks={['About Stadia', 'Games Library', 'Help Centre']}
        />
      ) : (
        ''
      )}
      {activeNav.phones || activeNav.home || activeNav.gaming ? (
        ''
      ) : (
        <div>
          <HeroSlider />
          <ProductSlider />
          <div className='tile-container-2'>
            <ProductTile2
              title='Pixel 5'
              description='The ultimate 5G Google phone.'
              btnText='Learn more'
              sup='1'
              video={pixel5Vid}
            />
            <ProductTile2
              title='Pixel 4a with 5G'
              description='High-speed help, for less.'
              btnText='Learn more'
              sup='1, 8'
              video={pixel4aVid}
            />
          </div>
          <ProductTile1
            title='Pixel 4a'
            description='Packed with the things that you want.'
            btnText='Learn more'
            image={pixel4aImg}
          />
          <div className='product-tile-3-container'>
            <ProductTile3
              title='Nest Wifi'
              description='Fast, reliable Wi-Fi for your whole home.'
              btnText='Learn more'
              sup='5'
              image={nestWifiImg}
            />
            <ProductTile3
              title='Nest Hub'
              description='Show off your favourite memories.'
              btnText='Learn more'
              sup='6'
              image={nestHubImg}
            />
            <ProductTile3
              title='Nest Mini'
              description='Bigger Sound Still Mini.'
              btnText='Learn more'
              sup='7'
              image={nestMiniImg}
            />
          </div>
          <CrmModule />
          <FootNotes />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
