import React from 'react';
import Logo from '../../assets/img/logo.gif';
import './style.css';

function Header() {
 return (
  <div>
  <header>
  <img src={Logo} />
  </header>
  </div>
  );

}

export default Header;