import './App.css';
import Header from './components/Header';
import Welcome from './components/welcome';
import About from './components/About'
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <Header/>
      <Welcome/>
      <About/>
      <Project/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
