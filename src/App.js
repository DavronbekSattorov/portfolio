import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';


function App() {
  return (
    <div className="App">
      <Home title = 'home'/>
      <About title = 'about'/>
      <Projects title = 'work'/>
      <Contact title = 'contact'/>
    </div>
  );
}

export default App;
