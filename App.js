import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import About from './Components/NavLink/About';
import Episode from './Components/NavLink/Episode';
import Contact from './Components/NavLink/Contact';
import MovePage from './Components/MovePage/MovePage';
import MovePage1 from './Components/MovePage1/MovePage1';
import MovePage2 from './Components/MovePage2/MovePage2';
import MovePage3 from './Components/MovePage3/MovePage3';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Header} />
        <Route path="/about" exact component={About} />
        <Route path="/episode" exact component={Episode} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/Social" exact component={MovePage} />
        <Route path="/Emotions" exact component={MovePage1} />
        <Route path="/Side" exact component={MovePage2} />
        <Route path="/audio" exact component={MovePage3} />



      </Switch>
    </Router>
  );
}

export default App;
