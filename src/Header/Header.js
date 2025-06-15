import React, { useState } from 'react';
import {Container, Nav, Navbar, Offcanvas} from 'react-bootstrap';
import Logo from '../img/logo.ico'; 
import { Link } from 'react-scroll';
import { useLanguage } from '../translations/LanguageContext';
import './Header.scss';

function Header() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const { t, setLang, language } = useLanguage();
  
  const closeOffcanvas = () => {
    setShowOffcanvas(false);
  };


  return (
    <header className='header'>
      <Navbar expand="lg" className="nav">
        <Container>
            <Navbar.Brand href="#home">
              <img
                src={Logo}
                alt="Logo"
                height="80"
                onClick={() => {
                closeOffcanvas();
              }}
              />
            </Navbar.Brand>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-lg`}
            onClick={() => setShowOffcanvas(!showOffcanvas)}
          />
          <Navbar.Offcanvas
            show={showOffcanvas}
            onHide={closeOffcanvas}
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                {t('menu')}
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className={`${window.innerWidth >= 992 ? '' : 'mobile__body'}`}>
              <Nav className="me-auto">
                <Link
                  to="home"
                  className={`${window.innerWidth >= 992 ? 'menu_item' : 'mobile_item'}`}
                  onClick={closeOffcanvas}
                  smooth={true}
                  duration={500}
                >
                  {t('home')}
                </Link>
                <Link
                  to="about"
                  className={`${window.innerWidth >= 992 ? 'menu_item' : 'mobile_item'}`}
                  onClick={closeOffcanvas}
                  smooth={true}
                  duration={500}
                >
                  {t('about_me')}
                </Link>
                <Link
                  to="portfolio"
                  className={`${window.innerWidth >= 992 ? 'menu_item' : 'mobile_item'}`}
                  onClick={closeOffcanvas}
                  smooth={true}
                  duration={500}
                >
                  {t('portfolio')}
                </Link>
                <Link
                  to="certificates"
                  className={`${window.innerWidth >= 992 ? 'menu_item' : 'mobile_item'}`}
                  onClick={closeOffcanvas}
                  smooth={true}
                  duration={500}
                >
                  {t('certificates')}
                </Link>
                <Link
                  to="contact"
                  className={`${window.innerWidth >= 992 ? 'menu_item' : 'mobile_item'}`}
                  onClick={closeOffcanvas}
                  smooth={true}
                  duration={500}
                >
                  {t('contact')}
                </Link>
                <div className={`${window.innerWidth >= 992 ? 'language-dropdown' : 'mobile-language'}`}>
                  <div className="language-options">
                    <span
                      onClick={() => setLang('en')}
                      className={language === 'en' ? 'active' : ''}
                    >
                      EN
                    </span>
                    |
                    <span
                      onClick={() => setLang('cs')}
                      className={language === 'cs' ? 'active' : ''}
                    >
                      CS
                    </span>
                  </div>
                </div>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>   
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
