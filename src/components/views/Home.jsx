import heroImage from '../../assets/images/hero-image.jpg'
import { SectionProjects } from '../shared/SectionProjects'

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
              <div className="cv">
                Descargar cv
              </div>

              <div className="networks">
                Github, LinkedIn
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