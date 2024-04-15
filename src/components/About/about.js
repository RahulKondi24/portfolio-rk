import React from 'react';
import './about.css';

import UIDesign from '../../assets/experience.png';
import WebDesign from '../../assets/software learning.jpg';
import AppDesign from '../../assets/education.png';

const About = () => {
  return (
    <section id='about'>
        <span className='aboutTitle'>What I do</span>
        <span className='aboutDesc'>I abouted and passinate dot net fullstack developer with experience</span>
        <div className='aboutBars'>
            <div className='aboutBar'>
                <img src={UIDesign} alt='' className='aboutBarImg'/>
                <div className='aboutBarText'>
                    <h2>UI/UX Design</h2>
                    <p>This is demo text ,you can write your Own </p>
                </div>
            </div>
            <div className='aboutBar'>
                <img src={WebDesign} alt='' className='aboutBarImg'/>
                <div className='aboutBarText'>
                    <h2>Website design</h2>
                    <p>This is demo text ,you can write your Own </p>
                </div>
            </div>
            <div className='aboutBar'>
                <img src={AppDesign} alt='' className='aboutBarImg'/>
                <div className='aboutBarText'>
                    <h2>App design</h2>
                    <p>This is demo text ,you can write your Own </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About