import { useState, useEffect } from 'react'
import './ThemeSwitcher.css'

const ThemeSwitcher = () => {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        // Verificar preferencia guardada
        const savedTheme = localStorage.getItem('theme')
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            setIsDark(true)
            document.body.classList.add('dark-mode')
        }
    }, [])

    const toggleTheme = () => {
        const newTheme = !isDark
        setIsDark(newTheme)

        if (newTheme) {
            document.body.classList.add('dark-mode')
            localStorage.setItem('theme', 'dark')
        } else {
            document.body.classList.remove('dark-mode')
            localStorage.setItem('theme', 'light')
        }
    }

    return (
        <button
            className={`theme-switcher ${isDark ? 'theme-switcher--dark' : ''}`}
            onClick={toggleTheme}
            aria-label={`Cambiar a modo ${isDark ? 'claro' : 'oscuro'}`}
        >
            <div className="theme-switcher__track">
                <div className="theme-switcher__thumb">
                    <span className="theme-switcher__icon">
                        {isDark ? '🌙' : '☀️'}
                    </span>
                </div>
            </div>
        </button>
    )
}

export default ThemeSwitcher