import React from 'react';
import './NavMenu.css';
import Button from '../Button/Button';

const NavMenu = ({ menuTitle, exploreBtn, subCategories, rightLinks }) => {
  return (
    <div className='nav-menu-container'>
      <div className='nav-menu-left'>
        <div className='nav-menu-header'>
          <h1 className='nav-menu-title'>{menuTitle}</h1>
          {exploreBtn === true ? (
            <div className='nav-menu-button-container'>
              <Button>Explore</Button>
            </div>
          ) : (
            ''
          )}
        </div>
        <div className='nav-menu-subCategories-container'>
          {subCategories.map((outerElement) => {
            return (
              <ul key={outerElement.category} className='nav-menu-left-list'>
                <h3 className='nav-menu-left-category'>
                  {outerElement.category.toUpperCase()}
                </h3>
                {outerElement.items.map((innerElement) => (
                  <li key={innerElement} className='nav-menu-left-item'>
                    <a href='/' className='nav-menu-left-item-link'>
                      {innerElement.title}
                      {innerElement.new === true ? (
                        <span className='nav-menu-left-item-new'>NEW</span>
                      ) : (
                        ''
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            );
          })}
        </div>
      </div>
      <div className='nav-menu-right'>
        <ul className='nav-menu-right-list'>
          {rightLinks.map((element) => (
            <li>{element}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavMenu;
