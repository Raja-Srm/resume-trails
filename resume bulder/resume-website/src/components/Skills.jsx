import React from 'react';

const Skills = () => {
    const skills = [
        { category: 'Programming Languages', items: ['JavaScript', 'Python', 'Java'] },
        { category: 'Frameworks', items: ['React', 'Node.js', 'Django'] },
        { category: 'Tools', items: ['Git', 'Docker', 'Webpack'] },
        { category: 'Databases', items: ['MySQL', 'MongoDB', 'PostgreSQL'] },
    ];

    return (
        <div className="skills">
            <h2>Skills</h2>
            {skills.map((skillSet, index) => (
                <div key={index} className="skill-category">
                    <h3>{skillSet.category}</h3>
                    <ul>
                        {skillSet.items.map((skill, idx) => (
                            <li key={idx}>{skill}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Skills;