import './FeaturedProjects.css'

import { projects } from '../../../data/projects'

const FeaturedProjects = () => {


    return (
        <section id="projects" className="projects section">
            <div className="container">
                <h2 className="section-title">Proyectos Destacados</h2>
                <p className="section-subtitle">
                    Algunos de los proyectos en los que he trabajado y que demuestran mis habilidades
                </p>

                <div className="projects__grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-card__image">
                                <span className="project-card__emoji">{project.image}</span>
                            </div>

                            <div className="project-card__content">
                                <h3 className="project-card__title">{project.title}</h3>
                                <p className="project-card__description">{project.description}</p>

                                <div className="project-card__technologies">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="tech-tag">{tech}</span>
                                    ))}
                                </div>

                                <div className="project-card__actions">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn--outline btn--small"
                                    >
                                        Ver Código
                                    </a>
                                    {project.demoUrl && (
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn--primary btn--small"
                                        >
                                            Ver Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturedProjects