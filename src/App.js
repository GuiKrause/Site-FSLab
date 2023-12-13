import Navbar from "./pages/Navbar/index"
import Hero from "./pages/Hero/index"
import Projects from "./pages/Projects/index"
import About from "./pages/About/index"
import Team from "./pages/Team/index"
import FAQ from "./pages/FAQ/index"
import Contact from "./pages/Contact/index"
import Footer from "./pages/Footer/index"
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Hero />
        <Projects />
        <About />
        <FAQ />
        <Team />
        <Contact />
        <Footer />
      </div>
    </Router>

      /* <div className='container'>
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
      <div className='container2'>
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
      </div> */
  );
}

export default App;
