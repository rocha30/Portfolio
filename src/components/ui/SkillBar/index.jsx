import { useState, useEffect } from 'react'
import './SkillBar.css'

const SkillBar = ({ name, level }) => {
    const [animatedLevel, setAnimatedLevel] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimatedLevel(level)
        }, 500)

        return () => clearTimeout(timer)
    }, [level])

    return (
        <div className="skill-bar">
            <div className="skill-bar__header">
                <span className="skill-bar__name">{name}</span>
                <span className="skill-bar__percentage">{level}%</span>
            </div>
            <div className="skill-bar__track">
                <div
                    className="skill-bar__fill"
                    style={{ width: `${animatedLevel}%` }}
                />
            </div>
        </div>
    )
}

export default SkillBar