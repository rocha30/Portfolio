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
                            Soy estudiante de tercer año de Ingeniería en Ciencias de la Computación y Tecnologías de la Información
                            en la Universidad del Valle de Guatemala (2023-2027), con enfoque en desarrollo backend, gestión de bases de datos y soluciones escalables.
                            Me apasiona aprender y aplicar tecnologías emergentes en proyectos innovadores.
                        </p>

                        <p className="about__paragraph">
                            Mi experiencia académica incluye Node.js, PostgreSQL, Prisma ORM y API REST, junto con conocimientos en frontend con React,
                            JavaScript y HTML/CSS para crear aplicaciones integrales. He colaborado en proyectos como sistemas de reservas y plataformas web,
                            fortaleciendo mis habilidades en trabajo en equipo y control de versiones con Git/GitHub.
                        </p>

                        <p className="about__paragraph">
                            Además, desarrollo habilidades blandas como resolución de problemas, comunicación asertiva y adaptabilidad. Actualmente,
                            amplío conocimientos en Docker y exploro áreas de diseño de interfaces (UI/UX).
                        </p>
                    </div>


                    <div className="about__highlights">
                        <h3>¿Por qué trabajar conmigo?</h3>
                        <ul className="about__list">
                            <li>🎯 Enfoque en código limpio y escalable (experiencia en POO y arquitecturas REST)</li>
                            <li>🛠️ Versatilidad técnica: desde bases de datos hasta integración frontend/backend</li>
                            <li>🚀 Compromiso con el aprendizaje continuo (dominio intermedio de inglés y aprendizaje de Docker)</li>
                            <li>👥 Metodología colaborativa con control de versiones y documentación clara</li>
                            <li>🔍 Atención al detalle en implementaciones técnicas y experiencia de usuario</li>

                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default QuickAbout