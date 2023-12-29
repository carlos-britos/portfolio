import heroImage from '../../assets/images/hero-image.jpg'
import { SectionProjects } from '../shared/SectionProjects'
import { Icon } from '../icons/Icon';
import { Download } from '../icons/Download';
import { Github } from '../icons/Github';
import { LinkedIn } from '../icons/LinkedIn';
import { Link } from 'react-router-dom'

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero__wrapper">
          <div className="hero__info">
            <h1 className="info__title">
              <div className="name">
                Carlos Britos
              </div>
              <div className="range">
                Semi Sr <span className="ui">UI</span> Developer
              </div>
            </h1>

            <h3 className="info__description">
              React | JavaScript | Ruby on Rails | CSS / Sass | HTML
            </h3>

            <div className="info__actions">
              <div className="cv c-button c-button--with-icon">
                <Icon iconSvg={<Download />} />
                Descargar cv
              </div>

              <div className="networks">
                <Link to="https://github.com/carlos-britos" target="_blank" className="c-button c-button--only-icon">
                  <Icon iconSvg={<Github />} />
                </Link>
                <Link to="https://www.linkedin.com/in/carlos-britos-398aa620a/" target="_blank" className="c-button c-button--only-icon">
                  <Icon iconSvg={<LinkedIn />} />
                </Link>
              </div>
            </div>
          </div>
          <div className="hero__img">
            {/* TODO: Optimizar imagen */}
            <img src={heroImage} alt="" decoding='async' loading='lazy'/>
          </div>
        </div>
      </section>

      <SectionProjects />
    </main>
  )
}

export { Home }