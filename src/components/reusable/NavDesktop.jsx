// import { useState, useEffect } from 'react';
import { Icon } from '../icons/Icon';
import { Translate } from '../icons/Translate';
import { ChevronDown } from '../icons/ChevronDown';
import { DarkMode } from '../icons/DarkMode';
import { LightMode } from '../icons/LightMode';
import { Link } from 'react-router-dom'

// TODO: Pasar a const
function NavDesktop({ darkMode, toggleThemeChange }) {
  
  return (
    <div className='header-nav'>
      {/* <Link className="c-button c-button--text" to="/contacto">
        Contacto
      </Link> */}
      <Link className="item c-button c-button--outlined c-button--with-icon both" to="/portfolio/">
        <Icon iconSvg={<Translate />} />
        {/* TODO: Dinamizar idioma */}
        Español
        <Icon iconSvg={<ChevronDown />} />
      </Link>
      <Link className="item c-button c-button--outlined c-button--with-icon" to="/portfolio/" onClick={() => toggleThemeChange()}>
        {darkMode ? <Icon iconSvg={<LightMode />} /> : <Icon iconSvg={<DarkMode />} />}
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </Link>
    </div>
  )
}

export { NavDesktop }