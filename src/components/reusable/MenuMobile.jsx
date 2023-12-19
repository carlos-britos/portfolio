import { useState, useEffect } from 'react';
import { Icon } from '../icons/Icon';
// import { Logo } from './icons/Logo';
import { MenuBurgerButton } from '../icons/MenuBurgerButton';
import { ChevronLeft } from '../icons/ChevronLeft';
import { CloseButton } from '../icons/CloseButton';
import { Link } from 'react-router-dom'

function MenuMobile() {
  const [menuState, setMenuState] = useState({
    currentStep: 1,
    categoryToShow: null,
    backButtonVisible: false,
    menuOpen: false,
  });

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth >= 992) {
        closeMenu();
      }
    };

    window.addEventListener('resize', handleWindowResize);

    const menu = document.querySelector('.c-menu')

    menu.addEventListener('click', event => {
      if (event.target.classList.contains('category-link')) {
        closeMenu();
      } else if (event.target.classList.contains('list-item--with-sublist')) {
        showSublist(event.target);
      }
    })

    if (menuState.currentStep === 1) {
      setMenuState(prevState => ({
        ...prevState,
        backButtonVisible: false,
      }));
    }
    else {
      setMenuState(prevState => ({
        ...prevState,
        backButtonVisible: true,
      }));
    }

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [menuState.currentStep]);

  const openMenu = () => {
    document.body.classList.add('menu-open');

    setMenuState((prevState) => ({
      ...prevState,
      menuOpen: true,
    }));
  };

  const closeMenu = () => {
    document.body.classList.remove('menu-open');
    
    resetMenu();
  };

  const showSublist = (button) => {
    setMenuState((prevState) => ({
      ...prevState,
      categoryToShow: button.dataset.category,
    }));
    showNextStep();
  };
  
  const showNextStep = () => {
    setMenuState((prevState) => ({
      ...prevState,
      currentStep: menuState.currentStep + 1,
    }));
  };
  
  const showPrevStep = () => {
    setMenuState((prevState) => ({
      ...prevState,
      currentStep: menuState.currentStep - 1,
    }));
  };
  
  const resetMenu = () => {
    setMenuState({
      currentStep: 1,
      categoryToShow: null,
      backButtonVisible: false,
      menuOpen: false,
    });
  };

  return (
    <>
      {/* TODO: Hacer que el body no tenga scroll cuando esta desplegado  */}
      <div className="c-menu__open" onClick={openMenu}>
        <Icon iconSvg={<MenuBurgerButton />} />
      </div>

      <div className={`c-menu__overlay ${menuState.menuOpen ? 'show' : ''}`} onClick={closeMenu}></div>
      <div className={`c-menu ${menuState.menuOpen ? 'show' : ''}`}>
        <div className="c-menu__header">
          <button className={`menu-header__back ${menuState.backButtonVisible ? 'show' : ''}`} onClick={showPrevStep}>
            <Icon iconSvg={<ChevronLeft />} />
          </button>

          <Link to='/' className="header__logo header__logo--font">
            CB
            {/* <Icon iconSvg={<Logo />} /> */}
          </Link>

          <button className="menu-header__close" aria-label="Cerrar menú" onClick={closeMenu}>
            <Icon iconSvg={<CloseButton />} />
          </button>
        </div>

        <div className="c-menu__list">
          <ul className={`menu-list menu-list--step-1 ${menuState.currentStep > 1 ? 'prev' : ''}`}>

            <Link className="list-item" to="/">
              Inicio
            </Link>

            {/* <div className="list-item list-item--with-sublist" data-category="categories">
              Categorías

              <div className="sublist-toggler">
                <Icon iconSvg={<ChevronRight />} />
              </div>
            </div> */}

            <Link className="list-item" to="/">
              Idioma
            </Link>
            <Link className="list-item" to="/">
              Dark Mode
            </Link>
            <Link className="list-item" to="/contacto">
              Contacto
            </Link>
          </ul>

          {/* <div className={`menu-list menu-list--step-2 ${menuState.currentStep < 2 ? 'next' : (menuState.currentStep > 2 
          ? 'prev' : '')}`}>
            <ul className={`menu-list__category ${menuState.categoryToShow === 'categories' ? 'show' : ''}`} data-category-list="categories">
              <div className="menu-list__title">
                Categorías
              </div>

              <a className="list-item" href="/empresa">
                Empresa
              </a>
              <a className="list-item" href="/contacto">
                Contacto
              </a>
              <a className="list-item" href="/preguntas_frecuentes">
                Preguntas frecuentes
              </a>
            </ul>
          </div> */}
        </div>
      </div>
    </>
  )
}

export { MenuMobile }