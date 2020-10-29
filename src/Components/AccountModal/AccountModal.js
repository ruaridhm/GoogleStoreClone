import React from 'react';
import './AccountModal.css';

const AccountModal = ({ closeModal }) => {
  console.log(closeModal);
  return (
    <div
      className='account-modal'
      onClick={() => {
        closeModal();
      }}
    >
      <div className='account-name'>Guest</div>
      <div className='signIn-button'>
        <a href='/' className='signIn-button-link'>
          <svg className='account-modal-svg' viewBox='0 0 24 24'>
            <g>
              {' '}
              <path
                d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
                fill='#1a73e8'
              ></path>{' '}
              <path
                d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
                fill='#34A853'
              ></path>{' '}
              <path
                d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
                fill='#FBBC05'
              ></path>{' '}
              <path
                d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
                fill='#EA4335'
              ></path>{' '}
              <path d='M1 1h22v22H1z' fill='none'></path>{' '}
            </g>
          </svg>
          <span className='account-signIn-text'>Sign in with Google</span>
        </a>
      </div>
      <ul className='account-modal-link-list'>
        <li className='account-modal-link-item'>
          <a href='/' className='account-modal-link'>
            <svg className='account-modal-svg' viewBox='0 0 24 24'>
              <path d='M18,17H6v-2h12V17z M18,13H6v-2h12V13z M18,9H6V7h12V9z M3,22l1.5-1.5L6,22l1.5-1.5L9,22l1.5-1.5L12,22l1.5-1.5L15,22 l1.5-1.5L18,22l1.5-1.5L21,22V2l-1.5,1.5L18,2l-1.5,1.5L15,2l-1.5,1.5L12,2l-1.5,1.5L9,2L7.5,3.5L6,2L4.5,3.5L3,2V22z'></path>
            </svg>
            <span className='account-modal-link-item-text'>Orders</span>
          </a>
        </li>
        <li className='account-modal-link-item'>
          <a href='/' className='account-modal-link'>
            <svg className='account-modal-svg' viewBox='0 0 24 24'>
              <path d='M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10zm-7-5.5l3.5 3.5-3.5 3.5V11h-4V9h4V6.5zm-6 11L5.5 14 9 10.5V13h4v2H9v2.5z'></path>
            </svg>
            <span className='account-modal-link-item-text'>Subscriptions</span>
          </a>
        </li>
        <li className='account-modal-link-item'>
          <a href='/' className='account-modal-link'>
            <svg className='account-modal-svg' viewBox='0 0 24 24'>
              <path d='M19.4,13c0-0.3,0.1-0.6,0.1-1s0-0.7-0.1-1l2.1-1.6c0.2-0.1,0.2-0.4,0.1-0.6l-2-3.5c-0.1-0.2-0.4-0.3-0.6-0.2 l-2.5,1c-0.5-0.4-1.1-0.7-1.7-1l-0.4-2.7C14.5,2.2,14.2,2,14,2h-4C9.8,2,9.5,2.2,9.5,2.4L9.1,5.1C8.5,5.3,8,5.7,7.4,6.1l-2.5-1 C4.7,5,4.5,5.1,4.3,5.3l-2,3.5C2.2,8.9,2.3,9.2,2.5,9.4L4.6,11c0,0.3-0.1,0.6-0.1,1s0,0.7,0.1,1l-2.1,1.6c-0.2,0.1-0.2,0.4-0.1,0.6 l2,3.5C4.5,18.9,4.7,19,5,18.9l2.5-1c0.5,0.4,1.1,0.7,1.7,1l0.4,2.6c0,0.2,0.2,0.4,0.5,0.4h4c0.2,0,0.5-0.2,0.5-0.4l0.4-2.6 c0.6-0.2,1.2-0.6,1.7-1l2.5,1c0.2,0.1,0.5,0,0.6-0.2l2-3.5c0.1-0.2,0.1-0.5-0.1-0.6L19.4,13z M12,15.5c-1.9,0-3.5-1.6-3.5-3.5 s1.6-3.5,3.5-3.5s3.5,1.6,3.5,3.5S13.9,15.5,12,15.5z'></path>
            </svg>
            <span className='account-modal-link-item-text'>Settings</span>
          </a>
        </li>

        <li className='account-modal-link-item'>
          <a href='/' className='account-modal-link'>
            <svg className='account-modal-svg' viewBox='0 0 48 48'>
              <g>
                {' '}
                <path d='M29.6,45H19V31.3a5.3,5.3,0,0,1,10.6,0ZM44.4,25,40,21.4V45.1H34V31.3a9.7,9.7,0,0,0-19.4,0V45H8.5V21.4L4.1,25,0,20.1,24.2,0,35,9V5.9h5v7.3l8.5,7Z'></path>{' '}
              </g>
            </svg>
            <span className='account-modal-link-item-text'>My Nest Home</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AccountModal;
