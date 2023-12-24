import { Icon } from '../icons/Icon';
import { Translate } from '../icons/Translate';
import { Link } from 'react-router-dom'

function NavDesktop() {
  return (
    <div className='header-nav'>
      <Link className="c-btn c-btn-contained-primary not-pill" to="/contacto">
        Contacto
      </Link>
      <Link className="item c-button" to="/">
        <Icon iconSvg={<Translate />} />
        Idioma
      </Link>
      <Link className="item" to="/">
        Dark Mode
      </Link>
    </div>
  )
}

export { NavDesktop }