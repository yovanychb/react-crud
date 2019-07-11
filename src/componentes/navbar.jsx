import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Main from '../crud/main';
import ListaApp from '../jsx/lista';

export default class Navbar extends React.Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={'/lista'} className="nav-link">Lista</Link>
              </li>
              <li className="nav-item">
                <Link to={'/'} className="nav-link">CRUD</Link>
              </li>
            </ul>
          </div>
        </nav>
        <br></br>
        <Switch>
          <Route path='/lista' component={ListaApp} />
          <Route path='/' component={Main} />
          <Route path='/nav' component={Navbar} />
        </Switch>
      </Router>
    );
  }
}
