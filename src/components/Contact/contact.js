import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';



const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_c8x0mqq', 'template_mxz6lpt', form.current, 'wO7TeXh47ACiuB3S2')
            .then((result) => {
                e.target.reset();
                alert('Email Sent ! Thank you');
            }, (error) => {
                alert('Email Not Sent !');
            });
    };

    return (
        <section id='contactPage'>
            <h1 className='contactTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out form below to discuss any work opprtunity</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' name="from_name" placeholder='your Name' />
                <input type='email' className='email' name="from_email" placeholder='your Email' />
                <textarea className='msg' name="message" rows={5} placeholder='Your Message'></textarea>
                <button type="submit" value="Send" className='submitBtn' >Send</button>
                <div className="links">
                    <a href="#" className="fa fa-facebook link" style={{ fontSize: '2rem' }}></a>
                    <a href="#" className="fa fa-twitter link" style={{ fontSize: '2rem' }}></a>
                    <a href="#" className="fa fa-linkedin link" style={{ fontSize: '2rem' }}></a>
                    <a href="#" className="fa fa-instagram link" style={{ fontSize: '2rem' }}></a>
                </div>
            </form>
        </section>
    )
}

export default Contact;