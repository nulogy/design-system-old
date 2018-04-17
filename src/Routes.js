import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import App from './App';
import Catalog from "./catalog";

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/catalog" component={Catalog} />
    </div>
  </Router>
);

export default Routes;
