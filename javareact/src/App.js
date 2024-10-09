import './App.css';
import ReactDOM from "react-dom/client";
import {Routes, Route } from "react-router-dom";

import Login from "./functions/Login";

function App() {
 return (
      <div>
        <Routes>
          <Route path="/" element={<Login />}>
          <Route path ="login" element={<Login/>}/>
          
          </Route>
        </Routes>
      </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
export default App;
