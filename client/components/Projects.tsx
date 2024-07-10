import React from 'react'
//import { Link } from 'react-router-dom'

import './Projects.css'
import Prj1 from '../picture/number1.jpg'
import Prj2 from '../picture/number2.jpg'
import Prj3 from '../picture/number3.jpg'

const Projects = () => {
    return (
        <>
        <div className='projects' id='projects'>
            <div className='container'>
                <h2>Projects</h2>
                <span className='line'></span>
                <div className='content'> 
                    <div className='card'>
                        <img src={Prj1} alt='Project 1' />
                        <p><a href="https://github.com/anthonymartin36/missingPurrson">MissingPurrson</a></p>
                        <p><span>Final project at Dev Academy. </span></p>
                        <p>This is a website to support individuals with lost cats with individuals that may have spotted them. Bringing together SQL, API, OAuth, Google Maps.</p>
                    </div>
                    <div className='card'>
                        <img src={Prj2} alt='Project 2' />
                        <p><a href="https://github.com/anthonymartin36/troll-toll-calculator">Troll Toll Calculator</a></p>
                        <p><span>Team Project at Dev Academy. </span></p>
                        <p>This is a website to will demonstrate to a Troll the potential revenue per Bridge. Bringing together SQL, API, and OAuth.</p>
                    </div>
                    <div className='card'>
                        <img src={Prj3} alt='Project 3' />
                        <p><a href="https://github.com/anthonymartin36/master-chef">Master Chef</a></p>
                        <p><span>This is a receip website. </span></p>
                        <p>This is site that was developed with a team, to display receipies and the ingredients that they have in common. </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Projects