import Button from '../../ui/Button'
import './Contact.css'

const Contact = () => {
    const contactInfo = [
        {
            icon: '📧',
            label: 'Email',
            value: 'marochalopez@gmail.com',
            link: 'mailto:marochalopez@gmail.com'
        },
        {
            icon: '📱',
            label: 'LinkedIn',
            value: 'MARIO FERNANDO ROCHA LOPEZ',
            link: 'https://www.linkedin.com/in/mario-fernando-rocha-lopez-0b4a4a332/'
        },
        {
            icon: '💻',
            label: 'GitHub',
            value: '@rocha30',
            link: 'https://github.com/rocha30'
        },
        {
            icon: '📞',
            label: 'Teléfono',
            value: '+502 4230 6428',
            link: 'tel:+50242306428'
        }
    ]

    const downloadCV = () => {
        window.open('/cv-mario-rocha.pdf', '_blank')
    }

    return (
        <section id="contact" className="contact section">
            <div className="container">
                <h2 className="section-title">¡Conectemos!</h2>
                <p className="section-subtitle">
                    Estoy disponible para prácticas profesionales, proyectos freelance o simplemente para conversar sobre tecnología
                </p>

                <div className="contact__content">
                    <div className="contact__info">
                        <h3>Información de Contacto</h3>
                        <div className="contact__list">
                            {contactInfo.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.link}
                                    target={item.link.startsWith('http') ? '_blank' : '_self'}
                                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                                    className="contact__item"
                                >
                                    <span className="contact__icon">{item.icon}</span>
                                    <div className="contact__details">
                                        <span className="contact__label">{item.label}</span>
                                        <span className="contact__value">{item.value}</span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="contact__cta">
                        <h3>¿Listo para colaborar?</h3>
                        <p>
                            Estoy buscando oportunidades para aplicar mis conocimientos en un entorno profesional
                            y seguir creciendo como desarrollador. ¡Me encantaría formar parte de tu equipo!
                        </p>

                        <div className="contact__actions">
                            <Button
                                size="large"
                                onClick={() => window.open('mailto:marochalopez@gmail.com', '_blank')}
                            >
                                Enviar Email
                            </Button>
                            <Button
                                variant="secondary"
                                size="large"
                                onClick={downloadCV}
                            >
                                Descargar CV
                            </Button>
                        </div>

                        <div className="contact__availability">
                            <span className="availability-indicator">🟢</span>
                            <span>Disponible para nuevas oportunidades</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact