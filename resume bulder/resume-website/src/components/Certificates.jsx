import React from 'react';

const Certificates = () => {
    const certificates = [
        {
            title: 'Certified Web Developer',
            organization: 'Web Development Institute',
            date: 'June 2022'
        },
        {
            title: 'JavaScript Algorithms and Data Structures',
            organization: 'freeCodeCamp',
            date: 'March 2021'
        },
        {
            title: 'React - The Complete Guide',
            organization: 'Udemy',
            date: 'January 2023'
        }
    ];

    return (
        <div className="certificates">
            <h2>Certificates</h2>
            <ul>
                {certificates.map((cert, index) => (
                    <li key={index}>
                        <strong>{cert.title}</strong> - {cert.organization} ({cert.date})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Certificates;