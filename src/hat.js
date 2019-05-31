import React from 'react';
import hat from './sorting-hat.png';
import './hat.css';

const Hat = () => {

    const beSorted = () => {

        fetch("https://www.potterapi.com/v1/sortingHat").then((resp) => resp.json())
            .then(function (data) {
                let houseName = data;
                document
                    .getElementById("place")
                    .innerHTML = {
                    houseName
                };
            })
            .catch(error => console.log('błąd: ', error))
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <img src={hat} alt={"hat"}/>
                    <button className= "btn btn-outline-dark" onClick={beSorted}>Be Sorted</button>
                </div>
                <div className="col" id="place"></div>
            </div>
        </div>
    );
}

export default Hat;
