import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from "./functions/Login";
import Signup from "./functions/Signup";
import Home from "./functions/Home";

function App() {
 return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path ="/login" element={<Login/>}/>
            <Route path ="/signup" element={<Signup/>}/>
            <Route path ="/home" element={<Home/>}/>
          </Routes>
        </Router>
      </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
export default App;