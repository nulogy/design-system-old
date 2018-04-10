import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="jumbotron">
      <div className="jumbotron__content">
        <h1 className="jumbotron__heading">Nulogy Design System</h1>
        <h2 className="jumbotron__subheading">Modern Enterprise Design for the Industrial Environment</h2>
        <p className="github">
          <a className="github__link" href="https://github.com/nulogy/design-system">
            <span className="hidden">view on github</span>
          </a>
        </p>
      </div>
    </div>
    );
  }
}

export default App;
