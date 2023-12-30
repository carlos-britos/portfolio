import { useState, useEffect } from 'react'
import { Icon } from '../icons/Icon'
import { Github } from '../icons/Github'
import { Mobile } from '../icons/Mobile'
import { Desktop } from '../icons/Desktop'


function ProjectPreview({ imgMobile, imgDesktop, alt, title, description, tecnologies }) {
  const [showPreviewDesktop, setShowPreviewDesktop] = useState(false)
  const [showButtonChanged, setShowButtonChanged] = useState(false)

  useEffect(() => {
    const handleWindowResize = () => {
      setShowButtonChanged(window.innerWidth < 992)
    };

    handleWindowResize()
    
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [])

  return (
    <div className="card">
      <div className={`images ${showPreviewDesktop ? 'is-desktop' : ''}`}>
        {/* TODO: Optimizar y mejorar la imagen */}
        <img className="img-mobile" src={imgMobile} alt={alt} decoding='async' loading='lazy'/>
        <img className="img-desktop" src={imgDesktop} alt={alt} decoding='async' loading='lazy'/>
      </div>

      <div className="info__wrapper">
        <div className="info">
          <div className="info__top">
            <div className="info__buttons">

              {showButtonChanged && (
                <div className="change-view c-button c-button--outlined c-button--with-icon" onClick={() => setShowPreviewDesktop(!showPreviewDesktop)}>
                  { showPreviewDesktop ? <Icon iconSvg={<Mobile />} /> : <Icon iconSvg={<Desktop />} /> }
                  { showPreviewDesktop ? 'Ver mobile' : 'Ver desktop'}
                </div>
              )}

              <div className="github c-button c-button--outlined c-button--only-icon">
                <Icon iconSvg={<Github />} />
              </div>
            </div>
            <div className="info__title">
              {title}
            </div>
          </div>
          <div className="info__description">
            {description}
          </div>
          <div className="info__tecnologies">
            {tecnologies.map((chip, index) => (
              <div key={index} className="chip">
                {chip}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export { ProjectPreview }