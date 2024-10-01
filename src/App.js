import { Link, Route, Routes, useLocation } from "react-router-dom";

import Home from "./Home";
import From from "./From";
import Name from "./Name";

import "./App.css";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation()
  return (
    <div className="header">
      <ul>
        <li></li>
        <li>
          <Link to="/"> home</Link>
        </li>
        <li>
          <Link to="from"> from</Link>
        </li>
        <li>
          <Link to="name"> Name</Link>
        </li>
      </ul>
      <AnimatePresence mode='wait'>
<Routes location={location} key={location.pathname}>
         <Route path="/" element={<Home />} />
       <Route path="/from" element={<From />} />
       <Route path="/name" element={<Name />} />
      
      </Routes>
      </AnimatePresence > 
    
    </div>
  );
}



export default App;
