import React from 'react';
import './home.css';
import logo from './logo.png';

const Home = () => {
    return (
        <div className="jumbotron-fluid">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="display-4">Welcome to the Wizarding World of Harry Potter!</h1>
                    </div>
                    <div className="col">
                        <img className="homePageImage" src={logo} alt={"logo"}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;