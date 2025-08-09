import React from 'react';

const WorkExperience = () => {
    const experiences = [
        {
            jobTitle: 'Software Engineer',
            company: 'Tech Solutions Inc.',
            date: 'June 2020 - Present',
            description: 'Developing and maintaining web applications using React and Node.js.'
        },
        {
            jobTitle: 'Intern',
            company: 'Web Innovations LLC',
            date: 'January 2020 - May 2020',
            description: 'Assisted in the development of client websites and learned about full-stack development.'
        }
    ];

    return (
        <div className="work-experience">
            <h2>Work Experience</h2>
            <ul>
                {experiences.map((experience, index) => (
                    <li key={index}>
                        <h3>{experience.jobTitle} at {experience.company}</h3>
                        <p>{experience.date}</p>
                        <p>{experience.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WorkExperience;