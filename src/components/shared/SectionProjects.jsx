import { ProjectPreview } from "./ProjectPreview"

function SectionProjects() {
  // TODO: Eliminar cuando se agreguen los proyectos
  const loop = [1,2,3,4,5,6,7,8]

  return (
    <section className='projects freelance'>
      <h1 className='projects__title'>Proyectos freelance</h1>

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

export { SectionProjects }