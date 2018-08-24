import React from 'react';

import './Navbar.css';

import Dice from '../../assets/img/dice2.png';

const navbar = () => {
  return (
    <nav className="UserPageNavbar">

      <div>

        <div className="navbar__brand">
          <img src={ Dice } alt="Dice" />
          <span>Destiny</span>
        </div>

        <div className="SearchBar">
          <input
            type="text"
            placeholder="Faça uma pesquisa aqui. . . ">

          </input>
        </div>

      </div>

    </nav>
  )
}

export default navbar;
