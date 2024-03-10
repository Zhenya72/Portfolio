import React from 'react'
import { Container } from 'react-bootstrap';
import portrait from '../../img/portrait.jpeg';
import cv from '../../file/CV.pdf';
import './About.scss';
function About() {
  return (
    <section className="conteiner" id="about">
        <Container>
            <h2 className="title">ABOUT ME</h2>
            <div className='about__conteiner'>
                <div className='about__photo'>
                      <img src={ portrait } alt='portrait' />
                </div>
                <div className='about__text'>
                    <p>
                        I am a Front-end developer with a strong foundation in HTML, CSS (including frameworks and preprocessors like SCSS), and JavaScript. Skilled in creating modern, responsive web interfaces. Experienced in React.js. Strong collaborator with effective communication and teamwork skills, able to contribute to innovative projects.
                    </p>
                    <dl className='about__info'>
                        <div className='about__info_cont'>
                            <dt>Full name:</dt>
                            <dd>Baranovskiy Yevheniy</dd>
                        </div>
                        <div className='about__info_cont'>
                            <dt>Date of birth:</dt>
                            <dd>12 March 2001</dd>
                        </div>
                        <div className='about__info_cont'>
                            <dt>Nationality:</dt>
                            <dd>Ukrainian</dd>
                        </div>
                        <div className='about__info_cont'>
                            <dt>Phone:</dt>
                            <dd>(063)-628-93-85</dd>
                        </div>
                        <div className='about__info_cont'>
                            <dt>Email:</dt>
                            <dd>yevheniy.bar@gmail.com</dd>
                        </div>
                    </dl>
                     <a className='button' href={cv} download="CV_Baranovskyi_Front-end Developer.pdf">
                        Download CV
                    </a>
                </div>
            </div>
            <div>
                <h3 className='text-center m-5'><span>SKI</span>LLS</h3>
                <div className='skills'>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>SASS</p>
                    <p>JavaScript</p>
                    <p>Bootstrap</p>
                    <p>React.js</p>
                    <p>REST API</p>
                    <p>TanStack Query</p>
                    <p>Zustand</p>
                    <p>Node.js</p>
                    <p>GIT</p>
                </div>
            </div>
        </Container>            
    </section>
  )
}

export default About;