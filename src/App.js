import React from 'react';
import './App/css';
import Home from './components/Home';
import Header from './components/Header';
import Hero from './components/Hero';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Router>
      <Route exact path="/"><Home /></Route>
      <Route path="/about-us"><AboutUs /></Route>
      <Route path="/post/:postId"><Post /><Route> 
      <Route path="/contact-us"><ContactUs /></Route>
        <Switch>
          <Route path="*">Error 404</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App