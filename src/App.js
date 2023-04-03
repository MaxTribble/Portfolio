import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar'
import Home from './components/Home'
import Contact from './components/Contact'
import Projects from './components/Project'
import Footer from './components/Footer'
function App() {
  return (
    <Router>
        <NavBar />
       <Routes>
          <Route path="/Portfolio/" element={<Home />} />
           <Route path="/Portfolio/projects" element={<Projects />} />
           {/* <Route path="/resume" element={<Resume />} /> */}
           {/* <Route path="*" element={<About to="/"/>} /> */}
         </Routes>
         <Footer />
    </Router>
  );
}

export default App;
