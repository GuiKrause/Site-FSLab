import Header from './Header';
import Hero from './Hero';
import Projects from './Projects';
import QuemSomos from './QuemSomos';
import FAQ from './FAQ';

function App() {
  return (
    <div className="App">
      <div className='content'>
      <Header></Header>
      <Hero></Hero>
      <Projects></Projects>
      <QuemSomos></QuemSomos>
      <FAQ></FAQ>
      </div>
    </div>
  );
}

export default App;
