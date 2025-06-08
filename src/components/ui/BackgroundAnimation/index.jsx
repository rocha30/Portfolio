import { useEffect, useState } from 'react'
import './BackgroundAnimation.css'

const BackgroundAnimation = () => {
    const [particles, setParticles] = useState([])

    useEffect(() => {
        const createParticles = () => {
            const newParticles = []
            for (let i = 0; i < 30; i++) {
                newParticles.push({
                    id: i,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    size: Math.random() * 4 + 2,
                    duration: Math.random() * 20 + 15,
                    delay: Math.random() * 5
                })
            }
            setParticles(newParticles)
        }

        createParticles()
    }, [])

    return (
        <div className="background-animation">
            {particles.map((particle) => (
                <div
                    key={particle.id}
                    className="particle"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        animationDuration: `${particle.duration}s`,
                        animationDelay: `${particle.delay}s`
                    }}
                />
            ))}


            <div className="floating-shapes">
                <div className="shape shape--circle"></div>
                <div className="shape shape--triangle"></div>
                <div className="shape shape--square"></div>
            </div>
        </div>
    )
}

export default BackgroundAnimation