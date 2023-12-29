import inergioImage from '../../assets/images/inergio.png'
import inergioDesktopImage from '../../assets/images/inergio-desktop.png'
import { useState } from 'react'
import { Icon } from '../icons/Icon'
import { Desktop } from '../icons/Desktop'
import { Mobile } from '../icons/Mobile'
import { Github } from '../icons/Github'

function ProjectPreview() {
  const [showPreviewDesktop, setShowPreviewDesktop] = useState(false)
  // const previewRef = useRef(null)

  return (
    <div className="card">
      <div className={`images ${showPreviewDesktop ? 'is-desktop' : ''}`}>
        {/* TODO: Optimizar y mejorar la imagen */}
        <img className="img-mobile" src={inergioImage} alt="Pantallazo principal de la web inergio.com.ar" decoding='async' loading='lazy'/>
        <img className="img-desktop" src={inergioDesktopImage} alt="Pantallazo principal de la web inergio.com.ar" decoding='async' loading='lazy'/>
      </div>
              
      <div className="info__wrapper">
        <div className="info">
          <div className="info__buttons">
            <div className="change-view c-button c-button--with-icon" onClick={() => setShowPreviewDesktop(!showPreviewDesktop)}>
              { showPreviewDesktop ? <Icon iconSvg={<Mobile />} /> : <Icon iconSvg={<Desktop />} /> }
              { showPreviewDesktop ? 'Ver mobile' : 'Ver desktop'}
            </div>
            <div className="github c-button c-button--only-icon">
              <Icon iconSvg={<Github />} />
            </div>
          </div>
          <div className="info__title">Inergio</div>
          <div className="info__description">
            Landing web creada para conocer sus servicios y contactar de forma rapida y sencilla
          </div>
          <div className="info__tecnologies">
            {/* TODO: Pasar a chips */}
            React Sass / CSS Vite
          </div>
        </div>
      </div>
    </div>
  )
}

export { ProjectPreview }