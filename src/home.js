import React from 'react';
import desktopImage from './hogwarts.png';
import './home.css';

const Home = () => {
    const imageUrl = desktopImage;

    return (
        <div
            className="homeImage"
            style={{
            backgroundImage: `url(${imageUrl})`
        }}></div>
    );
}

export default Home;