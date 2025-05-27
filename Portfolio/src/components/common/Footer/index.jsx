import './Footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const socialLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/tu-usuario',
            icon: '📱'
        },
        {
            name: 'LinkedIn',
            url: 'https://linkedin.com/in/tu-perfil',
            icon: '💼'
        },
        {
            name: 'Email',
            url: 'mailto:tu-email@gmail.com',
            icon: '✉️'
        }
    ]

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__info">
                        <h3>Mario Rocha</h3>
                        <p>Estudiante de Ingeniería en Sistemas</p>
                        <p>Desarrollador Web Full Stack</p>
                    </div>

                    <div className="footer__social">
                        <h4>Conecta conmigo</h4>
                        <div className="footer__social-links">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer__social-link"
                                    aria-label={link.name}
                                >
                                    <span className="footer__social-icon">{link.icon}</span>
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p>&copy; {currentYear} Mario Rocha. Todos los derechos reservados.</p>
                    <p>Hecho con ❤️ y React</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer