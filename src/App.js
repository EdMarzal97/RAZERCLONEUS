
import './App.css';
import  Navbar  from './Components/Navbar.js';
import {Switch, Route} from 'react-router-dom';
import Landing from './pages/landing.js';
import PC from './pages/pc.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/pc">
          <PC />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
