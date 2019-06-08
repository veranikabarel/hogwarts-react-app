import React from 'react';
import hat from '../assets/sortingHat.jpg';
import './hat.css';

const Hat = () => {

    const beSorted = () => {

        fetch("https://www.potterapi.com/v1/sortingHat").then((resp) => resp.json())
            .then(function (data) {
                let houseName = data;
                document
                    .getElementById("place")
                    .innerHTML = (`You might belong to...${houseName}!`);
            })
            .catch(error => console.log('Uuups, something went wrong! ', error))
    };

    return (

        <div className="ui container">

            <div className="ui stackable very relaxed two column grid">
                <div className="center aligned column">
                    <img src={hat} alt={"hat"}/>

                    <p className="sortingHatQuote">Now slip me snug around your ears,
                        <br></br>
                        I've never yet been wrong,<br></br>
                        I'll have alook inside your mind
                        <br></br>
                        And tell where you belong!</p>
                    <br></br>

                    <div
                        className="ui button sortinHatButton"
                        onClick={beSorted}
                        role="button"
                        tabindex="0">
                        Get sorted
                    </div>
                </div>

                <div className="center middle aligned column">

                    <h1 className="nameOfHouseHeading" id="place"></h1>
                </div>
            </div>
        </div>
    );
}

export default Hat;
