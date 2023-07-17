import About from './components/About';
import AppBarComp from './components/AppBar';
import Home from './components/Home';
import Footer from './components/Footer';
import "./App.css"
function App() {
  return (
    <div className="App">
      <AppBarComp/>
      <Home/>
      <About/>
      <Footer/>
      
    </div>
  );
}

export default App;
