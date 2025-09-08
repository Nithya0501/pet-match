import './App.scss';
import "./assets/style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from "./pages/home/HomePage";
import BrowsePets from "./pages/browsepets/BrowsePets";
import PetsProfile from './pages/petsprofile/PetsProfile';
import About from "./pages/about/About";

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Header />
        <main className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browsepets" element={<BrowsePets />} />
            <Route path="/petsprofile" element={<PetsProfile />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;






