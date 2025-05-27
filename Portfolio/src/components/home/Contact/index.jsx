import Button from '../../ui/Button'
import './Contact.css'

const Contact = () => {
    const contactInfo = [
        {
            icon: '📧',
            label: 'Email',
            value: 'mario.rocha@email.com',
            link: 'mailto:mario.rocha@email.com'
        },
        {
            icon: '📱',
            label: 'LinkedIn',
            value: '/in/mario-rocha',
            link: 'https://linkedin.com/in/mario-rocha'
        },
        {
            icon: '💻',
            label: 'GitHub',
            value: '@mariorocha',
            link: 'https://github.com/mariorocha'
        },
        {
            icon: '📞',
            label: 'Teléfono',
            value: '+1 (555) 123-4567',
            link: 'tel:+15551234567'
        }
    ]

    const downloadCV = () => {
        const link = document.createElement('a')
        link.href = '/cv-mario-rocha.pdf'
        link.download = 'CV-Mario-Rocha.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
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
                                onClick={() => window.open('mailto:mario.rocha@email.com', '_blank')}
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