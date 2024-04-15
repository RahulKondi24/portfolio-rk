import React from 'react';
import './profile.css';
import bg from '../../assets/image.png';
import { Link } from 'react-scroll';

const Profile = () => {
    return (
        <section id="intro">
            <div className='introContent'>
                <div className='overlay'>
                    <span className='hello'>Hello,</span>
                    <span>I'm <span className='introName'>Rahul Kondi</span><br />Fullstack Developer</span>
                    <div className="btn-container">
                        <button className="btn btn-color-2" onClick={() => window.open('./assets/Gopikrishna-webdeveloper-new (1).pdf')}>
                            Download CV
                        </button>
                        <button className="btn btn-color-1" onClick={() => { window.location.href = './#contact' }}>
                            Contact Info
                        </button>
                    </div>
                </div>
            </div>
            <div style={{ textAlign: 'center' }}>
                <img src={bg} alt='Profile' className='bg' />
            </div>
            <Link
                activeClass='active'
                to='skills'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className='desktopMenuListItemprofile'
            > About Me ⬇️
            </Link>
        </section>
    )
}

export default Profile;
