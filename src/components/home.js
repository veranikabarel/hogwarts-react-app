import React from 'react';
import logo from '../assets/harry.jfif';

const Home = () => {

    return (
        <div className="ui container">
            <div className="ui stackable very relaxed two column grid">
                <div className="middle aligned column">
                    <blockquote>
                        <h1><q>Excuse me sir, can you tell me where I might find Platform 9 and 3 quarters?</q></h1>
                    </blockquote>
                </div>
                <div className="center aligned column">
                    <img className="homePagePic" src={logo} alt="harry"></img>
                </div>
            </div>
        </div>
    );
}

export default Home;