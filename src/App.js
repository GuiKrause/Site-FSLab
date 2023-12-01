import Header from './Header';
import Hero from './Hero';
import Projects from './Projects';
import QuemSomos from './QuemSomos';
import FAQ from './FAQ';
import Equipe from './Equipe';
import FaleConosco from './FaleConosco';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <header>
          <nav className="nav-bar">
              <a className="nav-bar-link" href="">Início</a>
              <a className="nav-bar-link" href="">Projetos</a>
              <a className="nav-bar-link" href="">Quem Somos</a>
              <a className="nav-bar-link" href="">FAQ</a>
              <a className="nav-bar-link" href="">Equipe</a>
          </nav>
      </header>
      <Hero></Hero>
      <Projects></Projects>
      <QuemSomos></QuemSomos>
      <FAQ></FAQ>
      <Equipe></Equipe>
      <FaleConosco></FaleConosco>
      <footer>
        <div>
          <img src='ifro.svg'></img>
          <img src='fslab.svg'></img>
        </div>
      </footer>
      </div>
    </div>
  );
}

export default App;
