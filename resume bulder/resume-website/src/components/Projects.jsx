import React from 'react';

const Projects = () => {
    const projectList = [
        {
            title: 'Project One',
            description: 'A brief description of Project One.',
            technologies: ['React', 'Node.js'],
            link: 'https://github.com/user/project-one'
        },
        {
            title: 'Project Two',
            description: 'A brief description of Project Two.',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            link: 'https://github.com/user/project-two'
        },
        // Add more projects as needed
    ];

    return (
        <div className="projects">
            <h2>Projects</h2>
            <ul>
                {projectList.map((project, index) => (
                    <li key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;