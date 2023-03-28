import './App.css';
import Bestsellersection from './components/Bestsellersection';
import Governance from './components/Governance';
import Homesection from './components/Homesection';
import Infosection from './components/Infosection';
import Joincommunity from './components/Joincommunity';
import Navbar from './Navbar';



function App() {
  return (
    <>
      <Navbar />
      <Homesection />
      <Infosection/>
      <Governance/>
      <Joincommunity/>
      {/* <Roadmap /> */}
      <Bestsellersection/>
    </>
  );
}

export default App;
