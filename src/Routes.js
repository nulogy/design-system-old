import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import App from './App';
import Catalog from "./catalog";

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/catalog" component={Catalog} />
    </div>
  </Router>
);

export default Routes;
