import PropTypes from 'prop-types';
import { ProjectPreview } from "./ProjectPreview"

function SectionProjects({ title, classes }) {
  // TODO: Eliminar cuando se agreguen los proyectos
  const loop = [1,2,3,4]

  return (
    <section className={`projects ${classes}`}>
      <h1 className='projects__title'>{ title }</h1>

      <div className="cards">
        <div className="wrapper">
          {loop.map((item, index) => (
            <ProjectPreview key={index} />
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