import { useState } from 'react'
import Button from '../../ui/Button'
import './Navigation.css'

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navigationItems = [
        { label: 'Inicio', href: '#home' },
        { label: 'Sobre mí', href: '#about' },
        { label: 'Habilidades', href: '#skills' },
        { label: 'Proyectos', href: '#projects' },
        { label: 'Contacto', href: '#contact' }
    ]

    const scrollToSection = (href) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        setIsMenuOpen(false)
    }

    const downloadCV = () => {
        window.open('/cv-mario-rocha.pdf', '_blank')
    }

    return (
        <nav className="navigation">
            {/* Desktop Navigation */}
            <ul className="navigation__list">
                {navigationItems.map((item) => (
                    <li key={item.href} className="navigation__item">
                        <button
                            className="navigation__link"
                            onClick={() => scrollToSection(item.href)}
                        >
                            {item.label}
                        </button>
                    </li>
                ))}
            </ul>

            <div className="navigation__actions">
                <Button
                    variant="outline"
                    size="small"
                    onClick={downloadCV}
                    className="navigation__cv-btn"
                >
                    Descargar CV
                </Button>
                <Button
                    variant="primary"
                    size="small"
                    onClick={() => scrollToSection('#contact')}
                >
                    Contáctame
                </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
                className={`navigation__toggle ${isMenuOpen ? 'navigation__toggle--open' : ''}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Mobile Navigation */}
            <div className={`navigation__mobile ${isMenuOpen ? 'navigation__mobile--open' : ''}`}>
                <ul className="navigation__mobile-list">
                    {navigationItems.map((item) => (
                        <li key={item.href} className="navigation__mobile-item">
                            <button
                                className="navigation__mobile-link"
                                onClick={() => scrollToSection(item.href)}
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                    <li className="navigation__mobile-item">
                        <Button
                            variant="outline"
                            fullWidth
                            onClick={downloadCV}
                        >
                            Descargar CV
                        </Button>
                    </li>
                    <li className="navigation__mobile-item">
                        <Button
                            variant="primary"
                            fullWidth
                            onClick={() => scrollToSection('#contact')}
                        >
                            Contáctame
                        </Button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation