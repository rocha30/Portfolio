import SkillBar from '../../ui/SkillBar'
import './Skills.css'
import { skillsData } from '../../../data/skills'

const Skills = () => {


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