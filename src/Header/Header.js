import React, { useState } from 'react';
import {Container, Nav, Navbar, Offcanvas} from 'react-bootstrap';
import Logo from '../img/logo.ico'; 
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
            <Offcanvas.Body>
              <Nav className="me-auto">
                <Nav.Link
                  href="#home"
                  className='menu_item'
                  onClick={() => {
                  closeOffcanvas();
                  }}
                >HOME</Nav.Link>
                <Nav.Link
                  href="#about"
                  className='menu_item'
                  onClick={() => {
                  closeOffcanvas();
                  }}
                >ABOUT ME</Nav.Link>
                <Nav.Link
                  href="#portfolio"
                  className='menu_item'
                  onClick={() => {
                  closeOffcanvas();
                  }}
                >PORTFOLIO</Nav.Link>
                <Nav.Link
                  href="#certificates"
                  className='menu_item'
                  onClick={() => {
                  closeOffcanvas();
                  }}
                >CERTIFICATES</Nav.Link>
                <Nav.Link
                  href="#contact"
                  className='menu_item'
                  onClick={() => {
                  closeOffcanvas();
                  }}
                >CONTACT</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>   
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
