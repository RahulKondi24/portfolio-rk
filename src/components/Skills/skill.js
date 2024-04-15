import React from 'react';
import './skill.css';
import UIDesign from '../../assets/experience.png';
import WebDesign from '../../assets/web-development.png';
import AppDesign from '../../assets/education.png';
import Arrow from '../../assets/arrow.png';
import { Link } from 'react-scroll';

const Skill = () => {
  return (
    <section id='skills'>
      <div className='skillDesc'>Get To Know More</div>
      <div className='skillTitle'>About Me</div>
      <div className="about-details-container">
          <div className="details-container">
              <img src={UIDesign} alt='' className='skillBarImg'/>
              <h3>Experience</h3>
              <p>1.5+ years <br/>Full Stack Development</p>
          </div>
          <div className="details-container">
              <img src={WebDesign} alt='' className='skillBarImg'/>
              <h3>Software Development</h3>
              <p>Dot Net Full Stack Development</p>
          </div>
          <div className="details-container">
              <img src={AppDesign} alt='' className='skillBarImg'/>
              <h3>Education</h3>
              <p>Bachelor's Degree<br/>Mathematics &amp; Computer Science</p>
          </div>
      </div>
      <div className="text-container">
        <p>
          Experienced Dot Net Full Stack Developer with a passion for creating attractive
          and interactive websites that meet customer needs and exceed
          expectations. Well-versed in developing custom WordPress themes
          and plugins. Excels in HTML, CSS, JavaScript, and Vue.js
          development.
        </p>
      </div>
      <div>
        <ul className="skills-list">
          <li>C#</li>
          <li>.NET Framework</li>
          <li>.NET Core</li>
          <li>ASP.NET MVC</li>
          <li>ASP.NET Core</li>
          <li>Entity Framework</li>
          <li>SQL Server</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>Bootstrap</li>
          <li>Angular</li>
          <li>React</li>
          <li>RESTful APIs</li>
          <li>Git</li>
          <li>Agile Development</li>
          <li>Continuous Integration/Continuous Deployment (CI/CD)</li>
          <li>Object-Oriented Programming (OOP)</li>
          <li>Debugging and Troubleshooting</li>
        </ul>
      </div>
      <div style={{ textAlign: 'center' }}>
    <Link
        activeClass='active'
        to='works'
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className='desktopMenuListItemprofile'
    >
        Projects ⬇️
    </Link>
</div>
    </section>
  )
}

export default Skill
