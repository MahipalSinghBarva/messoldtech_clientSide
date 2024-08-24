import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';

import Home from "../src/components/home/Home"
import Footer from "../src/components/footer/Footer"
import Header from "../src/components/header/Header"
import Reviews from './components/reviews/Reviews';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/' element={<Reviews />} />
        </Routes>
        <Footer />
      </div>
    </Router>




  );
}

export default App;
