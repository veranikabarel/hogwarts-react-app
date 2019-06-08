import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Home from './components/home';
import Hat from './components/hat';
import Spells from './components/spells';
import Houses from './components/houses';
import Characters from './components/characters';
import './App.css';

const App = () => {

    return (
        <Router>
            <div>
            <ul className="ui fluid five item stackable menu">
                <li className="item">
                    <Link to="/">home</Link>
                </li>
                <li className="item">
                    <Link to="/hat">the sorting hat</Link>
                </li>
                <li className="item">
                    <Link to="/spells">spells</Link>
                </li>
                <li className="item">
                    <Link to="/houses">houses</Link>
                </li>
                <li className="item">
                    <Link to="/characters">characters</Link>
                </li>
            </ul>

            <Route exact path="/" component={Home}/>
            <Route path="/hat" component={Hat}/>
            <Route path="/spells" component={Spells}/>
            <Route path="/houses" component={Houses}/>
            <Route path="/characters" component={Characters}/>
            </div>
        </Router>
    );
}

export default App;