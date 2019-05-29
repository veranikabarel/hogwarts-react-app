import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Home from './home';
import Hat from './hat';
import Spells from './spells';
import Houses from './houses';
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
                            <Link to="/Hat">the sorting hat</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/spells">spells</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Houses">houses</Link>
                        </li>
                    </ul>

                    <Route exact path="/" component={Home}/>
                    <Route path="/hat" component={Hat}/>
                    <Route path="/spells" component={Spells}/>
                    <Route path="/houses" component={Houses}/>

                </div >
            </Router>
        );
    }
}

export default App;