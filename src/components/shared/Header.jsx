import { useState, useEffect } from 'react';
import { MenuMobile } from '../reusable/MenuMobile';
import { NavDesktop } from '../reusable/NavDesktop';
import { Link } from 'react-router-dom'


function Header() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 991);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 991);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // --- Dark or Light Mode ---

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
    <header className="header">
      <div className="header__wrapper">
        {!isDesktop && <MenuMobile darkMode={ darkMode } toggleThemeChange={ toggleThemeChange } />}
        <Link to='/' className="header__logo header__logo--font">
          C<span>arlos </span>
          B<span>ritos</span>
          {/* <Icon iconSvg={<Logo />} /> */}
        </Link>
        {isDesktop && <NavDesktop darkMode={ darkMode } toggleThemeChange={ toggleThemeChange } />}
      </div>
    </header>
  )
}

export default Header