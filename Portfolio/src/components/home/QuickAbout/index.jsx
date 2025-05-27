import './QuickAbout.css'

const QuickAbout = () => {
    return (
        <section id="about" className="about section">
            <div className="container">
                <h2 className="section-title">Sobre mí</h2>
                <p className="section-subtitle">
                    Conoce un poco más sobre mi trayectoria y pasión por la tecnología
                </p>

                <div className="about__content">
                    <div className="about__text">
                        <p className="about__paragraph">
                            Soy un estudiante de <strong>3er año de Ingeniería en Sistemas</strong> con una gran
                            pasión por el desarrollo web y la creación de soluciones tecnológicas innovadoras.
                        </p>

                        <p className="about__paragraph">
                            Mi enfoque está en <strong>desarrollo frontend</strong> con React y JavaScript,
                            pero también tengo experiencia en backend con Node.js y bases de datos.
                            Me encanta aprender nuevas tecnologías y aplicarlas en proyectos reales.
                        </p>

                        <p className="about__paragraph">
                            Estoy buscando <strong>oportunidades de prácticas profesionales</strong> donde
                            pueda contribuir con mis conocimientos y seguir creciendo como desarrollador.
                        </p>
                    </div>

                    <div className="about__highlights">
                        <h3>¿Por qué trabajar conmigo?</h3>
                        <ul className="about__list">
                            <li>🎯 Enfocado en escribir código limpio y mantenible</li>
                            <li>🚀 Siempre dispuesto a aprender nuevas tecnologías</li>
                            <li>👥 Excelente trabajo en equipo y comunicación</li>
                            <li>🔍 Atención al detalle en UI/UX</li>
                            <li>⚡ Capacidad de adaptación y resolución de problemas</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default QuickAbout