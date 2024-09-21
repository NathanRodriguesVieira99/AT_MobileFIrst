import React from 'react';
import BurgerMenu from './BurgerMenu/BurgerMenu';


import './Header.scss';

const Header = () => {
  return (
    <>
      <header className='header'>
        <h1 className='h1'>59 Max Cavalera</h1>
        <BurgerMenu />
      </header>
    </>
  );
};

export default Header;
