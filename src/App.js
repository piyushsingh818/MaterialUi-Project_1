import "./App.css"
import About from './components/About';
import Header from './components/Header';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact_us' element={<ContactUs/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter> 
    </div>
  );
}

export default App;
