import React from 'react'
import { TelephoneFill, EnvelopeAtFill, Telegram, Linkedin } from 'react-bootstrap-icons';
import { Container } from 'react-bootstrap';
import ContactForm from './ContactForm';
import './Contact.scss';
function Contact() {
  return (
    <section className="conteiner mt-5" id="contact">
        <Container>
            <h2 className="title">CONTACT</h2>
            <div className='contact__conteiner'>
              <address>
                <ul>
                  <li>
                    <a className="link" href="tel:+380636289385">
                      <TelephoneFill className='icon' />
                      (063) 628-93-85
                    </a>
                  </li>
                  <li>
                    <a className="link" href="mailto:yevheniy.bar@gmail.com">
                      <EnvelopeAtFill className='icon'/>
                      yevheniy.bar@gmail.com
                    </a>
                  </li>
                  <li>
                    <a className="link" href="https://t.me/Zhenya_72">
                      <Telegram className='icon'/>
                      @Zhenya_72
                    </a>
                  </li>
                  <li>
                    <a className="link" href="https://www.linkedin.com/in/%D1%94%D0%B2%D0%B3%D0%B5%D0%BD%D1%96%D0%B9-%D0%B1%D0%B0%D1%80%D0%B0%D0%BD%D0%BE%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9-0a85262b9">
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