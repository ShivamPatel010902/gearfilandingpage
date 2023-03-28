import './App.css';
import Bestsellersection from './components/Bestsellersection';
import Governance from './components/Governance';
import Homesection from './components/Homesection';
import Infosection from './components/Infosection';
import Joincommunity from './components/Joincommunity';
import Moreinfosection from './components/Moreinfosection';
import Roadmap from './components/Roadmap';
import Navbar from './Navbar';



function App() {
  return (
    <>
      <Navbar />
      <Homesection />
      <Infosection/>
      <Governance/>
     <Moreinfosection/>
      <Joincommunity/>
      <Roadmap/>
      {/*<Bestsellersection/>*/}
    </>
  );
}

export default App;
