
import './App.css';
import Home from './Pages/Home/Home';
import { Routes, Route } from "react-router-dom";
import About from './Pages/About/About';
import Header from './Pages/Home/Shared/Header/Header';
import Footer from './Pages/Home/Shared/Footer/Footer';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
