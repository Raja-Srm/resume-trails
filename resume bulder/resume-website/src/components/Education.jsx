import React from 'react';

const Education = () => {
    const educationData = [
        {
            degree: 'Bachelor of Science in Computer Science',
            institution: 'University of Example',
            graduationDate: 'May 2020'
        },
        {
            degree: 'Master of Science in Software Engineering',
            institution: 'University of Sample',
            graduationDate: 'May 2022'
        }
    ];

    return (
        <div className="education">
            <h2>Education</h2>
            <ul>
                {educationData.map((edu, index) => (
                    <li key={index}>
                        <h3>{edu.degree}</h3>
                        <p>{edu.institution}</p>
                        <p>{edu.graduationDate}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Education;