import PropTypes from 'prop-types';
import { ProjectPreview } from "./ProjectPreview"
import inergioImage from '../../assets/images/inergio.png'
import inergioDesktopImage from '../../assets/images/inergio-desktop.png'

function SectionProjects({ title, classes }) {
  // TODO: Eliminar cuando se agreguen los proyectos
  const loop = [1,2,3,4]

  return (
    <section className={`projects ${classes}`}>
      <h1 className='projects__title'>{ title }</h1>

      <div className="cards">
        <div className="wrapper">
          {loop.map((item, index) => (

            <ProjectPreview key={index} 
              imgMobile={inergioImage} 
              imgDesktop={inergioDesktopImage} 
              alt={'Pantallazo principal de la web inergio.com.ar'}
              title='Inergio'
              description='Landing web creada para conocer sus servicios y contactar de forma rapida y sencilla'
              tecnologies={['React', 'Sass / CSS', 'Vite']} >
            </ProjectPreview>
          ))}
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