import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Sarah from "./pages/Sarah";
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import  UserContext from './context/DataContext.js'
import {useState} from 'react'
import { useContext } from 'react';
function App() {
  const [Delete, setDelete] = useState(false);
  const value = { Delete, setDelete };

  return (
    <div className="App">
          <UserContext.Provider value={value}>
       <Nav />
       <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Sarah' element={<Sarah  />} />
          <Route path='Settings' element={<Settings />} />
        </Routes>
      {/* < Sarah/> */}
      {/* <Footer />  */}
            </UserContext.Provider>
    </div>
  );
}

export default App;
