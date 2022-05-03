import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import RecentWorks from './components/RecentWorks';


function App() {
  return (
    <div className="App">
      <Home title = 'home'/>
      <About title = 'about'/>
      <RecentWorks title = 'work'/>
      <Contact title = 'contact'/>
    </div>
  );
}

export default App;
