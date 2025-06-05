import { useState, useEffect } from 'react'
import Button from '../../ui/Button'
import './Hero.css'

const Hero = () => {
    const [typedText, setTypedText] = useState('')
    const fullText = 'Mario Rocha'

    useEffect(() => {
        let index = 0
        const timer = setInterval(() => {
            if (index <= fullText.length) {
                setTypedText(fullText.slice(0, index))
                index++
            } else {
                clearInterval(timer)
            }
        }, 150)

        return () => clearInterval(timer)
    }, [])

    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
    }

    const downloadCV = () => {
        window.open('/cv-mario-rocha.pdf', '_blank')
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
                            <span className="hero__name">
                                {typedText}
                                <span className="typing-cursor">|</span>
                            </span>
                        </h1>

                        {/* ✅ RESTAURAR: Descripción del rol */}
                        <p className="hero__subtitle">
                            Estudiante de <span className="highlight">Ingeniería en Ciencias de la Computación</span> en UVG
                        </p>

                        <p className="hero__description">
                            Desarrollador Full Stack apasionado por crear experiencias web excepcionales.
                            Especializado en React, Node.js y bases de datos SQL. Buscando oportunidades
                            para aplicar mis conocimientos en un entorno profesional.
                        </p>

                        {/* ✅ RESTAURAR: Estadísticas */}
                        <div className="hero__stats">
                            <div className="hero__stat">
                                <span className="hero__stat-number">3+</span>
                                <span className="hero__stat-label">Años estudiando</span>
                            </div>
                            <div className="hero__stat">
                                <span className="hero__stat-number">15+</span>
                                <span className="hero__stat-label">Proyectos</span>
                            </div>
                            <div className="hero__stat">
                                <span className="hero__stat-number">8+</span>
                                <span className="hero__stat-label">Tecnologías</span>
                            </div>
                        </div>

                        {/* ✅ RESTAURAR: Botones de acción */}
                        <div className="hero__actions">
                            <Button size="large" onClick={scrollToProjects}>
                                Ver Proyectos
                            </Button>
                            <Button variant="secondary" size="large" onClick={downloadCV}>
                                Descargar CV
                            </Button>
                        </div>
                    </div>

                    {/* ✅ RESTAURAR: Imagen/Avatar */}
                    <div className="hero__image">
                        <div className="hero__avatar">
                            <div className="hero__avatar-placeholder">
                                <img
                                    src="/mario.rocha.jpeg"
                                    alt="Mario Rocha - Desarrollador Full Stack"
                                    className="hero__avatar-image"
                                />
                            </div>
                            {/* <div className="hero__decorations">
                                <div className="hero__decoration hero__decoration--1">⚡</div>
                                <div className="hero__decoration hero__decoration--2">🚀</div>
                                <div className="hero__decoration hero__decoration--3">💡</div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero