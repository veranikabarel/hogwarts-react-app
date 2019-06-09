import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Home from './components/home';
import Hat from './components/hat';
import Spells from './components/spells';
import Houses from './components/houses';
import Characters from './components/characters';
import './App.css';

class App extends Component {
   
    render() {
        return (
            <Router>
                <div>

                    <ul className="ui fluid five item stackable menu">
                        <li className="item">
                            <Link
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                to="/">home</Link>
                        </li>
                        <li className="item">
                            <Link
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1000}
                                to="/hat">the sorting hat</Link>
                        </li>
                        <li className="item">
                            <Link
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                to="/spells">spells</Link>
                        </li>
                        <li className="item">
                            <Link
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                to="/houses">houses</Link>
                        </li>
                        <li className="item">
                            <Link
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                to="/characters">characters</Link>
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
}

export default App;