import React from 'react'
import { TelephoneFill, EnvelopeAtFill, Telegram, Linkedin } from 'react-bootstrap-icons';
import {Container} from 'react-bootstrap';
import './Footer.scss';
function Footer() {
  return (
    <footer className='footer'>
      <Container>
        <div className='footer__conteiner'>
            <p>&copy; 2024 Yevheniy. All rights reserved.</p>
            <address>
                <ul className='footer__address'>
                  <li>
                    <a className="link" href="tel:+380636289385"><TelephoneFill className='icon' /></a>
                  </li>
                  <li>
                    <a className="link" href="mailto:yevheniy.bar@gmail.com"><EnvelopeAtFill className='icon'/></a>
                  </li>
                  <li>
                    <a className="link" href="https://t.me/Zhenya_72"><Telegram className='icon'/></a>
                  </li>
                  <li>
                    <a className="link" href="https://t.me/Zhenya_72"><Linkedin className='icon'/></a>
                  </li>
                </ul>
              </address>
        </div>
      </Container>
    </footer>
  )
}
export default Footer;