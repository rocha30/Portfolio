import Button from '../../ui/Button'
import './Hero.css'

const Hero = () => {
    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
    }

    const downloadCV = () => {
        // Crear un link temporal para descargar el CV
        const link = document.createElement('a')
        link.href = '/cv-mario-rocha.pdf'
        link.download = 'CV-Mario-Rocha.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="hero__content">
                    <div className="hero__text">
                        <div className="hero__greeting">
                            <span className="hero__wave">👋</span>
                            <span>¡Hola! Soy</span>
                        </div>
                        <h1 className="hero__title">
                            <span className="hero__name">Mario Rocha</span>
                        </h1>
                        <h2 className="hero__subtitle">
                            Estudiante de <span className="hero__highlight">Ingeniería en Sistemas</span>
                        </h2>
                        <p className="hero__description">
                            Estudiante de Ingeniería en Ciencias de la Computación en la Universidad del Valle de Guatemala,
                            apasionado por el desarrollo backend con Node.js, PostgreSQL y Prisma ORM.
                            Creo aplicaciones full-stack con React y JavaScript, enfocándome en soluciones escalables, código limpio y trabajo en equipo.
                            , con interés en aplicar mis habilidades en proyectos reales y contribuir a un equipo innovador.
                        </p>

                        <div className="hero__stats">
                            <div className="hero__stat">
                                <span className="hero__stat-number">3+</span>
                                <span className="hero__stat-label">Años de estudio</span>
                            </div>
                            <div className="hero__stat">
                                <span className="hero__stat-number">10+</span>
                                <span className="hero__stat-label">Proyectos</span>
                            </div>
                            <div className="hero__stat">
                                <span className="hero__stat-number">12+</span>
                                <span className="hero__stat-label">Tecnologías</span>
                            </div>
                        </div>

                        <div className="hero__actions">
                            <Button onClick={scrollToProjects} size="large">
                                Ver Proyectos
                            </Button>
                            <Button
                                variant="secondary"
                                size="large"
                                onClick={downloadCV}
                            >
                                Descargar CV
                            </Button>
                        </div>
                    </div>

                    <div className="hero__image">
                        <div className="hero__avatar">
                            <div className="hero__avatar-placeholder">
                                <span className="hero__avatar-emoji">👨‍💻</span>
                            </div>
                            <div className="hero__decorations">
                                <div className="hero__decoration hero__decoration--1">⚡</div>
                                <div className="hero__decoration hero__decoration--2">🚀</div>
                                <div className="hero__decoration hero__decoration--3">💡</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero