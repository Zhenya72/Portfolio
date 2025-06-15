import React, {useState} from 'react'
import { Container } from 'react-bootstrap';
import Aperture from '../../img/Portfolio/Aperture.png';
import Beauty from '../../img/Portfolio/Beauty.png';
import Footapp from '../../img/Portfolio/Footapp.png';
import SmilaRoof from '../../img/Portfolio/SmilaRoof.png';
import Colors from '../../img/Portfolio/Colors.png';
import Notes from '../../img/Portfolio/Notes.png';
import CurrencyConverter from '../../img/Portfolio/CurrencyConverter.png';
import Stopwatch from '../../img/Portfolio/Stopwatch.png';
import DataAndTime from '../../img/Portfolio/DataAndTime.png';
import Calculator from '../../img/Portfolio/Calculator.png';
import Card from '../../Components/Card/Card';
import { useLanguage } from '../../translations/LanguageContext';
import './Portfolio.scss';
function Portfolio() {
  const { t } = useLanguage();

  const cards = [
  {id: 1, title: 'Footapp', subtitle: 'React, Bootstrap, Axios, react-router-dom', category: 'react', img: Footapp, link: 'https://footapp-eaencap9w-zhenya72s-projects.vercel.app/authorization', githubLink: 'https://github.com/Zhenya72/footapp'},
  {id: 2, title: 'SmilaRoof', subtitle: 'React, Bootstrap, Axios, react-router-dom, Zustand, TanStack Query', category: 'react', img: SmilaRoof, link: 'https://smila-roof.vercel.app/', githubLink: 'https://github.com/Zhenya72/SmilaRoof'},
  {id: 3, title: 'Aperture', subtitle: 'HTML, CSS, JS', category: 'verstka', img: Aperture, link: 'https://zhenya72.github.io/Aperture/', githubLink: 'https://github.com/Zhenya72/Aperture'},
  {id: 4, title: 'Beauty Zone', subtitle: 'HTML, SCSS, JS', category: 'verstka', img: Beauty, link: 'https://zhenya72.github.io/BeatyZone/', githubLink: 'https://github.com/Zhenya72/BeatyZone'},
  {id: 5, title: 'Colors', subtitle: 'HTML, SCSS, JS', category: 'js', img: Colors, link: 'https://zhenya72.github.io/Colors/', githubLink: 'https://github.com/Zhenya72/Colors'},
  {id: 6, title: 'Notes', subtitle: 'HTML, Bootstrap, JS', category: 'js', img: Notes, link: 'https://zhenya72.github.io/Notes/', githubLink: 'https://github.com/Zhenya72/Notes/tree/main'},
  {id: 7, title: 'Currency Converter', subtitle: 'HTML, Bootstrap, JS', category: 'js', img: CurrencyConverter, link: 'https://zhenya72.github.io/CurrencyConverter/', githubLink: 'https://github.com/Zhenya72/CurrencyConverter'},
  {id: 8, title: 'Stopwatch', subtitle: 'HTML, Bootstrap, JS', category: 'js', img: Stopwatch, link: 'https://zhenya72.github.io/Stopwatch/', githubLink: 'https://github.com/Zhenya72/Stopwatch'},
  {id: 9, title: 'Data and time', subtitle: 'HTML, Bootstrap, JS', category: 'js', img: DataAndTime, link: 'https://zhenya72.github.io/Data-and-time/', githubLink: 'https://github.com/Zhenya72/Data-and-time'},
  {id: 10, title: 'Calculator', subtitle: 'HTML, Bootstrap, JS', category: 'js', img: Calculator, link: 'https://zhenya72.github.io/Calculator/', githubLink: 'https://github.com/Zhenya72/Calculator'},
  ]
  
  const onTransition = (link) => {
    window.open(link, '_blank');
  }
  const onTransitionGit = (link) => {
    window.open(link, '_blank');
  }

  const [selectedCategory, setSelectedCategory] = useState('all');
  const filteredCards = selectedCategory === 'all'
    ? cards
    : cards.filter(card => card.category === selectedCategory);

  return (
    <section className="conteiner" id="portfolio">
        <Container>
            <h2 className="title">{t('portfolio')}</h2>
            <div className='portfolio__buttons'>
              <button 
              onClick={() => setSelectedCategory('all')} 
              className={`${selectedCategory === 'all' ? 'active' : ''}`}>{t('portfolio_all')}</button>
              <button 
              onClick={() => setSelectedCategory('react')}
              className={`${selectedCategory === 'react' ? 'active' : ''}`}
              >react</button>
              <button 
              onClick={() => setSelectedCategory('verstka')}
              className={`${selectedCategory === 'verstka' ? 'active' : ''}`}
              >{t('portfolio_verstka')}</button>
              <button 
              onClick={() => setSelectedCategory('js')}
              className={`${selectedCategory === 'js' ? 'active' : ''}`}
              >js</button>
            </div>
            <div className="portfolio__cards">
              {filteredCards.map((card) => (
                    <Card
                      key={card.id}
                      id={card.id}
                      title={card.title}
                      subtitle={card.subtitle}
                      image={card.img}
                      onTransition={() => onTransition(card.link)}
                      onTransitionGit={() => onTransitionGit(card.githubLink)}
                    />
                  ))}
            </div>
        </Container>            
    </section>
  )
}
export default Portfolio;