import React, { useState } from 'react';
import {Container, Nav, Navbar, Offcanvas} from 'react-bootstrap';
import Logo from '../img/logo.ico'; 
import { Link } from 'react-scroll';
import './Header.scss';

function Header() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  
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
                  Menu
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
                  HOME
                </Link>
                <Link
                  to="about"
                  className={`${window.innerWidth >= 992 ? 'menu_item' : 'mobile_item'}`}
                  onClick={closeOffcanvas}
                  smooth={true}
                  duration={500}
                >
                  ABOUT ME
                </Link>
                <Link
                  to="portfolio"
                  className={`${window.innerWidth >= 992 ? 'menu_item' : 'mobile_item'}`}
                  onClick={closeOffcanvas}
                  smooth={true}
                  duration={500}
                >
                  PORTFOLIO
                </Link>
                <Link
                  to="certificates"
                  className={`${window.innerWidth >= 992 ? 'menu_item' : 'mobile_item'}`}
                  onClick={closeOffcanvas}
                  smooth={true}
                  duration={500}
                >
                  CERTIFICATES
                </Link>
                <Link
                  to="contact"
                  className={`${window.innerWidth >= 992 ? 'menu_item' : 'mobile_item'}`}
                  onClick={closeOffcanvas}
                  smooth={true}
                  duration={500}
                >
                  CONTACT
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>   
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
