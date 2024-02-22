import PropTypes from 'prop-types';
import { ProjectPreview } from "./ProjectPreview"
import inergioImage from '../../assets/images/inergio.png'
import inergioDesktopImage from '../../assets/images/inergio-desktop.png'
import nikeImage from '../../assets/images/nike.png'
import nikeDesktopImage from '../../assets/images/nike-desktop.png'

function SectionProjects({ title, classes }) {

  return (
    <section className={`projects ${classes}`}>
      <h1 className='projects__title'>{ title }</h1>

      <div className="cards">
        <div className="wrapper">
          {classes === 'freelance' && (
            <ProjectPreview 
              imgMobile={inergioImage} 
              imgDesktop={inergioDesktopImage} 
              alt={'Pantallazo principal de la web inergio.com.ar'}
              title='Inergio'
              description='Landing web creada para conocer sus servicios y contactar de forma rapida y sencilla'
              tecnologies={['React', 'Sass / CSS', 'Vite']}
              github='https://github.com/Inergio/inergio-reactjs' >
            </ProjectPreview>
          )}
          {classes === 'clone' && (
            <ProjectPreview 
              imgMobile={nikeImage} 
              imgDesktop={nikeDesktopImage} 
              alt={'Pantallazo principal de la web Nike replicada en React'}
              title='Nike'
              description='Clon de la web de Nike para reforzar habilidades en React con proyectos reales'
              tecnologies={['React', 'Sass / CSS', 'Vite']}
              github='https://github.com/carlos-britos/nike-clone' >
            </ProjectPreview>
          )}
        </div>
      </div>
    </section>
  )
}

SectionProjects.propTypes = {
  title: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
};

export { SectionProjects }