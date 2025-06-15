import React from 'react'
import { TelephoneFill, EnvelopeAtFill, Telegram, Linkedin } from 'react-bootstrap-icons';
import { Container } from 'react-bootstrap';
import ContactForm from './ContactForm';
import { useLanguage } from '../../translations/LanguageContext';
import './Contact.scss';
function Contact() {
  const { t } = useLanguage();
  return (
    <section className="conteiner mt-5" id="contact">
        <Container>
            <h2 className="title">{t('contact')}</h2>
            <div className='contact__conteiner'>
              <address>
                <ul>
                  <li>
                    <a className="link" target="_blank" rel="noreferrer" href="tel:+420602269521">
                      <TelephoneFill className='icon' />
                      +420602269521
                    </a>
                  </li>
                  <li>
                    <a className="link" target="_blank" rel="noreferrer" href="mailto:yevheniy.bar@gmail.com">
                      <EnvelopeAtFill className='icon'/>
                      yevheniy.bar@gmail.com
                    </a>
                  </li>
                  <li>
                    <a className="link" target="_blank" rel="noreferrer" href="https://t.me/Yevhenii_72b">
                      <Telegram className='icon'/>
                      @Yevhenii_72b 
                    </a>
                  </li>
                  <li>
                    <a className="link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/%D1%94%D0%B2%D0%B3%D0%B5%D0%BD%D1%96%D0%B9-%D0%B1%D0%B0%D1%80%D0%B0%D0%BD%D0%BE%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9-0a85262b9">
                      <Linkedin className='icon'/>
                      Linkedin
                    </a>
                  </li>
                </ul>
              </address>
              <ContactForm/>
            </div>
        </Container>            
    </section>
  )
}
export default Contact;