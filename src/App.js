import Header from './Header/Header';
import Home from './Sections/Home/Home';
import About from './Sections/About/About';
import Portfolio from './Sections/Portfolio/Portfolio';
import Certificates from './Sections/Certificates/Certificates'
import Contact from './Sections/Contact/Contact';
import Footer from './Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ToastContainer /> 
        <Home />
        <About />
        <Portfolio />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
