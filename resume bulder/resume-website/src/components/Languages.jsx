import React from 'react';

const Languages = () => {
    const languages = [
        { name: 'English', proficiency: 'Fluent' },
        { name: 'Spanish', proficiency: 'Conversational' },
        { name: 'French', proficiency: 'Basic' },
    ];

    return (
        <div className="languages">
            <h2>Languages</h2>
            <ul>
                {languages.map((language, index) => (
                    <li key={index}>
                        {language.name} - {language.proficiency}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Languages;