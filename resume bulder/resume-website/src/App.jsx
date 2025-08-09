import React from 'react';
import PersonalDetails from './components/PersonalDetails';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Certificates from './components/Certificates';
import './styles/main.css';

function App() {
    return (
        <div className="resume">
            <PersonalDetails />
            <Education />
            <WorkExperience />
            <Projects />
            <Skills />
            <Languages />
            <Certificates />
        </div>
    );
}

export default App;