import heroImage from '../../assets/images/hero-image.jpg'
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
              Carlos Britos - Semi Sr UI Developer
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
      {/* {landingSections.map((section, index) => (
        <LandingSection key={index} section={section} />
      ))}

      <CardSection />

      <UsNetworks /> */}
    </main>
  )
}

export { Home }