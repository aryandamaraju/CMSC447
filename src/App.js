import Header from './Header'
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Switch } from '@material-ui/core';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
    </Router>
  );
}

export default App;
