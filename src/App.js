import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar'
import Home from './components/Home'
import Contact from './components/Contact'
import Projects from './components/Project'
import Footer from './components/Footer'
import "./App.css";
import { useState } from "react";


function App() {
  const [currentPage, setCurrentPage] = useState('Home')
  function renderPage(){
    if(currentPage === "Home") {
      return <Home setCurrentPage= {setCurrentPage}/>
    }
    if(currentPage === "Projects") {
      return <Projects/>
    }

  }
  return (
    <div>
      <NavBar setCurrentPage = {setCurrentPage}/>
        {renderPage()}
          <Footer />
        </div>
  );
}

export default App;

// function App() {
//   const [currentPage, setCurrentPage] = useState('About')
//   function renderPage(){
//     if(currentPage === "About") {
//       return <About setCurrentPage= {setCurrentPage}/>
//     }
//     if(currentPage === "Projects") {
//       return <Projects/>
//     }
//     if(currentPage === "Contact") {
//       return <Contact/>
//     }
//     if(currentPage === "Resume") {
//       return <Resume />
//     }
//   }
//   return (
//     <div className="App bg-dark">
//       <Header setCurrentPage = {setCurrentPage}/>
//       <main>

//         {renderPage()}
//         <div>
//           <Footer />
//         </div>
//       </main>
//     </div>
//   );
// }

// export default App;

