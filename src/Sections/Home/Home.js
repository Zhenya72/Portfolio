import React from 'react'
import { Container } from 'react-bootstrap';
import { useLanguage } from '../../translations/LanguageContext';
import './Home.scss'
function Home() {
  const { t } = useLanguage();
  return (
    <section className="home" id="home">
        <Container>
            <div className="home_content">
                <h1>{t('home_name')}</h1>
                <h3>{t('home_dev')}</h3>
            </div>
        </Container>
    </section>
  )
}

export default Home;