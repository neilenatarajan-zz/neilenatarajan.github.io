import React from 'react';
import { Route, } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Writing from '../Writing/Writing';
import CompSci from '../CompSci/CompSci';

function App() {
  return (
    <div className="app">
      <div>
        <Route exact path="/" render={routerProps => <Home routerProps={routerProps} />} />
        <Route exact path="/about" render={routerProps => <About routerProps={routerProps} />} />
        <Route exact path="/writing" render={routerProps => <Writing routerProps={routerProps} />} />
        <Route exact path="/compsci" render={routerProps => <CompSci routerProps={routerProps} />} />
      </div>
    </div>
  );
}

export default App;
