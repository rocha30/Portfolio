import SkillBar from '../../ui/SkillBar'
import './Skills.css'

const Skills = () => {
    const skillsData = {
        frontend: [
            { name: 'HTML5', level: 90 },
            { name: 'CSS3', level: 85 },
            { name: 'JavaScript', level: 80 },
            { name: 'React', level: 75 },
            { name: 'TypeScript', level: 60 }
        ],
        backend: [
            { name: 'Node.js', level: 70 },
            { name: 'Express', level: 65 },
            { name: 'MongoDB', level: 60 },
            { name: 'MySQL', level: 55 },
            { name: 'Python', level: 50 }
        ],
        tools: [
            { name: 'Git & GitHub', level: 85 },
            { name: 'VS Code', level: 90 },
            { name: 'Figma', level: 70 },
            { name: 'Postman', level: 75 },
            { name: 'NPM/Yarn', level: 80 }
        ]
    }

    return (
        <section id="skills" className="skills section">
            <div className="container">
                <h2 className="section-title">Habilidades Técnicas</h2>
                <p className="section-subtitle">
                    Tecnologías y herramientas que domino y con las que he trabajado
                </p>

                <div className="skills__content">
                    <div className="skills__category">
                        <h3 className="skills__category-title">
                            <span className="skills__icon">🎨</span>
                            Frontend
                        </h3>
                        <div className="skills__list">
                            {skillsData.frontend.map((skill) => (
                                <SkillBar
                                    key={skill.name}
                                    name={skill.name}
                                    level={skill.level}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="skills__category">
                        <h3 className="skills__category-title">
                            <span className="skills__icon">⚙️</span>
                            Backend
                        </h3>
                        <div className="skills__list">
                            {skillsData.backend.map((skill) => (
                                <SkillBar
                                    key={skill.name}
                                    name={skill.name}
                                    level={skill.level}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="skills__category">
                        <h3 className="skills__category-title">
                            <span className="skills__icon">🛠️</span>
                            Herramientas
                        </h3>
                        <div className="skills__list">
                            {skillsData.tools.map((skill) => (
                                <SkillBar
                                    key={skill.name}
                                    name={skill.name}
                                    level={skill.level}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills