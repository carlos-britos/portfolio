import { Icon } from '../icons/Icon';
// import { Instagram } from './icons/Instagram';
import { Link } from 'react-router-dom'

function NavDesktop() {
  return (
    <div className='header-nav'>
      <Link className="c-btn c-btn-contained-primary not-pill" to="/contacto">
        Contacto
      </Link>
      <Link className="item" to="/">
        Idioma
      </Link>
      <Link className="item" to="/">
        Dark Mode
      </Link>
    </div>
  )
}

export { NavDesktop }