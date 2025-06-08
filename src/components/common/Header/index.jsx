import { useState, useEffect } from 'react'
import Navigation from '../Navigation'
import './Header.css'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
            <div className="container">
                <div className="header__content">
                    <div className="header__logo">
                        <h2>Mario Rocha</h2>
                    </div>
                    <Navigation />
                </div>
            </div>
        </header>
    )
}

export default Header