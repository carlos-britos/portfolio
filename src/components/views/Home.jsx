import heroImage from '../../assets/images/hero-image.jpg'
import inergioImage from '../../assets/images/inergio.png'
// import { LandingSection } from '../components/LandingSection';
// import { CardSection } from '../components/CardSection';
// import { UsNetworks } from '../components/UsNetworks';

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
            <img src={heroImage} alt="" />
          </div>
        </div>
      </section>
      <section className='proyects freelance'>
        <h1 className='proyects__title'>Proyectos freelance</h1>

        {/* TODO: agregar swiper */}
        <div className="cards">
          <div className="wrapper">
            <div className="card">
              {/* TODO: Optimizar y mejorar la imagen */}
              <img src={inergioImage} alt="Pantallazo principal de la web inergio.com.ar" />
              <div className="info">
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
        </div>
      </section>
      {/* {landingSections.map((section, index) => (
        <LandingSection key={index} section={section} />
      ))}

      <CardSection />

      <UsNetworks /> */}
    </main>
  )
}

export { Home }