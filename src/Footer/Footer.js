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
                    <a className="link" href="https://www.linkedin.com/in/%D1%94%D0%B2%D0%B3%D0%B5%D0%BD%D1%96%D0%B9-%D0%B1%D0%B0%D1%80%D0%B0%D0%BD%D0%BE%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9-0a85262b9"><Linkedin className='icon'/></a>
                  </li>
                </ul>
              </address>
        </div>
      </Container>
    </footer>
  )
}
export default Footer;