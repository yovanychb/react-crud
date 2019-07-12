import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Main from '../crud/main';
import App from '../App';

export default class Navbar extends React.Component {
  render() {
    return (
      <Router>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/crud'} className="nav-link">CRUD</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
              <Route path='/' component={ App } />
              <Route path='/crud' component={ Main } />
          </Switch>
      </Router>
    );
  }
}
