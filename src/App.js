import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Home from './home';
import Hat from './hat';
import Spells from './spells';
import Houses from './houses';
import Characters from './characters';
import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">

                    <ul className="navbar">
                        <li className="nav-item">
                            <Link to="/">home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/hat">the sorting hat</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/spells">spells</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/houses">houses</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/characters">characters</Link>
                        </li>
                    </ul>

                    <Route exact path="/" component={Home}/>
                    <Route path="/hat" component={Hat}/>
                    <Route path="/spells" component={Spells}/>
                    <Route path="/houses" component={Houses}/>
                    <Route path="/characters" component={Characters}/>

                </div >
            </Router>
        );
    }
}

export default App;