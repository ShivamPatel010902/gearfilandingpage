import './App.css';
import AnimatedText from './components/AnimatedText';
import Bestsellersection from './components/Bestsellersection';
import Footer from './components/Footer';
import Governance from './components/Governance';
import Homesection from './components/Homesection';
import Infosection from './components/Infosection';
import Joincommunity from './components/Joincommunity';
import Moreinfosection from './components/Moreinfosection';
import Navbar from './components/Navbar';
import Roadmap from './components/Roadmap';




function App() {
  return (
    <>
      <Navbar/>
    
      <Homesection />
      <Infosection/>
      <Governance/>
     <Moreinfosection/>
      <Joincommunity/>
      <Roadmap/>
      <Footer/>
      {/*<Bestsellersection/>*/}
    </>
  );
}

export default App;
