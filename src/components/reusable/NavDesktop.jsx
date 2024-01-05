import { useState, useEffect } from 'react';
import { Icon } from '../icons/Icon';
import { Translate } from '../icons/Translate';
import { ChevronDown } from '../icons/ChevronDown';
import { DarkMode } from '../icons/DarkMode';
import { LightMode } from '../icons/LightMode';
import { Link } from 'react-router-dom'

function NavDesktop() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark" ? true : false);

  useEffect(() => {
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
  }, [darkMode]);

  const toggleThemeChange = () => {
    if (darkMode === false) {
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    } else {
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    }
  };
  
  return (
    <div className='header-nav'>
      <Link className="c-button c-button--text" to="/contacto">
        Contacto
      </Link>
      <Link className="item c-button c-button--outlined c-button--with-icon both" to="/">
        <Icon iconSvg={<Translate />} />
        {/* TODO: Dinamizar idioma */}
        Español
        <Icon iconSvg={<ChevronDown />} />
      </Link>
      <Link className="item c-button c-button--outlined c-button--with-icon" to="/" onClick={() => toggleThemeChange()}>
        {darkMode ? <Icon iconSvg={<LightMode />} /> : <Icon iconSvg={<DarkMode />} />}
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </Link>
    </div>
  )
}

export { NavDesktop }