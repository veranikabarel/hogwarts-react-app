import React from 'react';
import './hat.css';

fetch("https://www.potterapi.com/v1/sortingHat")
    .then(resp => resp.json())
    .then(resp => {
        console.log(resp);
    })

const Hat = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <button>Be Sorted</button>
                </div>
                <div className="col"></div>
            </div>
        </div>
    );
}

export default Hat;