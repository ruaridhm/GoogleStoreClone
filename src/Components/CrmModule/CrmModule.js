import React from 'react';
import './CrmModule.css';
import Button from '../Button/Button';
import googleLogo from '../../Images/googeLogo.png';

const CrmModule = () => {
  return (
    <div className='crmModule'>
      <img className='crm-google-logo' src={googleLogo} alt='Google Logo'></img>
      <h1 className='crm-main-text'>
        Keep me updated about devices, news, tips and offers from Google Store.
      </h1>
      <Button buttonStyle='btn--fillup'>Sign Up</Button>
      <a className='signup-email-alt' href='/'>
        or enter email address
      </a>
      <span className='crm-disclaimer'>
        Your personal data will be processed by Google Commerce Limited to send
        you emails with updates regarding hardware products and services in
        accordance with <a href='/'>Google's Privacy Policy.</a>
      </span>
    </div>
  );
};

export default CrmModule;
