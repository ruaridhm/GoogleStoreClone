import React from 'react';

const FooterMain = () => {
  return (
    <div className='footer-main'>
      <div className='footer-main-left'></div>
      <div className='footer-main-right'>
        <div className='footer-items-1'>
          <ul className='footer-list-1'>
            <li className='footer-item'>
              <a href='/'>Placing an order</a>
            </li>
            <li className='footer-item'>
              <a href='/'>Delivery options</a>
            </li>
            <li className='footer-item'>
              <a href='/'>Tracking a package</a>
            </li>
            <li className='footer-item'>
              <a href='/'>Country availability</a>
            </li>
            <li className='footer-item'>
              <a href='/'>Repairs</a>
            </li>
            <li className='footer-item'>
              <a href='/'>Find a nest pro</a>
            </li>
            <li className='footer-item'>
              <a href='/'>Nest legal</a>
            </li>
            <li className='footer-item'>
              <a href='/'>Nest privacy</a>
            </li>
          </ul>
        </div>
        <div className='footer-items-2'>
          <ul className='footer-list-2'>
            <li className='footer-item'>
              <a href='/'>Device recycling</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterMain;
