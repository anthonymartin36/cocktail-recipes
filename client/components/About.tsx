import Footer from './Footer.tsx'
import Nav from './Navbar.tsx'
import React from 'react'
import john from '../picture/john-doe.jpg'

import './About.css'

const About = () => {
    return (
        <>
        <Nav />
        <div className='about' id='about'>
            <div className='container'>
                <div className='col-2'>
                    <h2>About</h2>
                    <span className='line'></span>
                    <p>hey, its a website about cocktails. </p>
                </div>
            </div>
        </div>
        <Footer />
        </>
        )

}
export default About 