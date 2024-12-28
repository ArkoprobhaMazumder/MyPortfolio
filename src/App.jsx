import './app.scss';
import Contact from './Components/contact/Contact';
import Cursor from './Components/cursor/Cursor';
import Exprerience from './Components/exprerience/Exprerience';
import Hero from './Components/hero/Hero';
import Navbar from './Components/navbar/Navbar';
import Paralax from './Components/paralax/Paralax';
import Portfolio from './Components/portfolio/Portfolio';
import Services from './Components/services/Services';

const App = () => {


  return (
    <>
      <Cursor />
      <section id='Homepage'>
        <Navbar />
        <Hero />
      </section>
      <section>
        <Paralax type="services" />
      </section>
      <section id="Services">
        <Services />
      </section>
      <section id='Portfolio'>
        <Paralax type="portfolio" />
      </section>
      <section id='Experience'>
        <Exprerience />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </ >
  )
}

export default App
