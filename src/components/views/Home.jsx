import heroImage from '../../assets/images/hero-image.jpg'
import inergioImage from '../../assets/images/inergio.png'
import inergioDesktopImage from '../../assets/images/inergio-desktop.png'
import { useState, useRef, forwardRef, useImperativeHandle } from 'react'
// import { LandingSection } from '../components/LandingSection';
// import { CardSection } from '../components/CardSection';
// import { UsNetworks } from '../components/UsNetworks';

function BothImages({ changeImage }, ref) {
  
  const [isDesktop, setIsDesktop] = useState(false)

  useImperativeHandle(ref, () => ({
    changeImage: () => {
      setIsDesktop(!isDesktop);
    },
  }));
  
  return(
    <div className={`images ${isDesktop ? 'show' : ''}`}>
      {/* TODO: Optimizar y mejorar la imagen */}
      {/* TODO: Hacer imagenes con alto y ancho dinamico con js */}
      <img className={`img-mobile ${isDesktop ? '' : 'show'}`} src={inergioImage} alt="Pantallazo principal de la web inergio.com.ar" decoding='async' loading='lazy'/>
      <img className={`img-desktop ${isDesktop ? 'show' : ''}`} src={inergioDesktopImage} alt="Pantallazo principal de la web inergio.com.ar" decoding='async' loading='lazy'/>
    </div>
  )
}

const ForwardedBothImages = forwardRef(BothImages);

function Home() {
  // TODO: Eliminar cuando se agreguen los proyectos
  const loop = [1,2,3,4,5,6,7,8]

  const imageRefs = loop.map(() => useRef(null));

  const callChangeImage = (index) => {
    if (imageRefs[index].current) {
      imageRefs[index].current.changeImage();
    }
  };

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
      <section className='projects freelance'>
        <h1 className='projects__title'>Proyectos freelance</h1>

        {/* TODO: agregar swiper */}
        <div className="cards">
          <div className="wrapper">
            {loop.map((item, index) => (
            
              <div key={item} className="card">
                <ForwardedBothImages ref={imageRefs[index]} />
                
                <div className="info__wrapper">
                  <div className="info">
                    <div className="info__buttons">
                      <div className="change-view" onClick={() => callChangeImage(index)}>
                        Ver desktop
                      </div>
                      <div className="github">
                        Github
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
            ))}
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