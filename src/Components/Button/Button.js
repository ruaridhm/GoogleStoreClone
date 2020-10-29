import React from 'react';
import './Button.css';

const STYLES = ['btn--fill', 'btn--fillup', 'btn-highlight'];

const SIZES = ['btn--small', 'btn--medium', 'btn--large'];

const Button = ({ children, onClick, type, buttonSize, buttonStyle }) => {
  const checkStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[1];

  return (
    <button
      className={`btn ${checkStyle} ${checkSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
