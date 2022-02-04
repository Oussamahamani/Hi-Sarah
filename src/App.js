import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Sarah from "./pages/Sarah";
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
function App() {
  return (
    <div className="App">
       <Nav />

       <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Sarah' element={<Sarah  />} />
          <Route path='About' element={<About />} />
        </Routes>
      {/* < Sarah/> */}
      {/* <Footer />  */}
    </div>
  );
}

export default App;
