import React from 'react'
import { Container } from 'react-bootstrap';
import portrait from '../../img/portrait.jpeg';
import cv from '../../file/CV.pdf';
import { useLanguage } from '../../translations/LanguageContext';
import './About.scss';
function About() {
  const { t } = useLanguage();
  return (
    <section className="conteiner" id="about">
        <Container>
            <h2 className="title">{t('about_me')}</h2>
            <div className='about__conteiner'>
                <div className='about__photo'>
                      <img src={ portrait } alt='portrait' />
                </div>
                <div className='about__text'>
                    <p>{t('about__text')}</p>
                    <dl className='about__info'>
                        <div className='about__info_cont'>
                            <dt>{t('about_title_name')}</dt>
                            <dd>Baranovskiy Yevhenii</dd>
                        </div>
                        <div className='about__info_cont'>
                            <dt>{t('about_title_birth')}</dt>
                            <dd>{t('about_birth')}</dd>
                        </div>
                        <div className='about__info_cont'>
                            <dt>{t('about_title_nationality')}</dt>
                            <dd>{t('about_nationality')}</dd>
                        </div>
                        <div className='about__info_cont'>
                            <dt>{t('about_title_phone')}</dt>
                            <dd>+420602269521</dd>
                        </div>
                        <div className='about__info_cont'>
                            <dt>Email:</dt>
                            <dd>yevheniy.bar@gmail.com</dd>
                        </div>
                    </dl>
                     <a className='button' href={cv} download="CV_Baranovskyi_Front-end Developer.pdf">
                     {t('about_Download_CV')}
                    </a>
                </div>
            </div>
            <div>
                <h3 className='text-center m-5'><span>{t('about_skills_start')}</span>{t('about_skills_end')}</h3>
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