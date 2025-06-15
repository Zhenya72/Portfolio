import React from 'react'
import { Container, Carousel } from 'react-bootstrap';
import slide1 from '../../img/Certificates/WebDevelopment.jpg';
import slide2 from '../../img/Certificates/HTML.jpg';
import slide3 from '../../img/Certificates/CSS.jpg';
import slide4 from '../../img/Certificates/js.jpg';
import slide5 from '../../img/Certificates/jQuery.jpg';
import slide6 from '../../img/Certificates/В1.jpg';
import { useLanguage } from '../../translations/LanguageContext';
import './Certificates.scss'
function Certificates() {
  const { t } = useLanguage();
  return (
    <section className="conteiner" id="certificates">
        <Container>
            <h2 className="title">{t('certificates')}</h2>
            <Carousel 
            fade={true}
            pause={false}
            interval={3000}
            className="carousel-container">
                <Carousel.Item className='carousel-item'>
                  <img src={slide1} alt="Certificate 1" />
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                  <img src={slide2} alt="Certificate 2" />
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                  <img src={slide3} alt="Certificate 3" />
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                  <img src={slide4} alt="Certificate 4" />
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                  <img src={slide5} alt="Certificate 5" />
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                  <img src={slide6} alt="Certificate 6" />
                </Carousel.Item>        
            </Carousel>
        </Container>            
    </section>
  )
}
export default Certificates;