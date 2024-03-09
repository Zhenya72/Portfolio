import React from 'react'
import { TelephoneFill, EnvelopeAtFill, Telegram } from 'react-bootstrap-icons';
import { Container } from 'react-bootstrap';
import ContactForm from './ContactForm';
import './Contact.scss';
function Contact() {
  return (
    <section className="conteiner" id="contact">
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
                </ul>
              </address>
              <ContactForm/>
            </div>
        </Container>            
    </section>
  )
}
export default Contact;