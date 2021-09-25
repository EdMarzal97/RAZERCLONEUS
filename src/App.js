
import './App.css';
import  Navbar  from './Components/Navbar.js';
import {Switch, Route} from 'react-router-dom';
import Landing from './pages/landing.js';
import PC from './pages/pc.js';
import Console from './pages/console.js';
import Mobile from './pages/mobile.js';
import LifeStyle from './pages/lifestyle.js';
import Services from './pages/services.js';
import Footer from './Components/Footer.js';

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
        <Route path="/console">
          <Console />
        </Route>
        <Route path="/mobile">
          <Mobile />
        </Route>
        <Route path="/lifestyle">
          <LifeStyle />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
