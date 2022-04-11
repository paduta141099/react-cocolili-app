import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Carousel from './components/Carousel/Carousel';
import Couple from './components/Couple/Couple';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
      <Couple/>
      <Footer/>
    </div>
  );
}

export default App;
