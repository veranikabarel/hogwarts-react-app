import React from 'react';

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
                    <p className="sortingHatQuote">
                        A thousand years or more ago, When I was newly sewn, There lived four wizards of
                        renown, Whose names are still well known:<br></br>
                        Bold Gryffindor, from wild moor, Fair Ravenclaw, from glen,<br></br>
                        Sweet Hufflepuff, from valley broad, Shrewd Slytherin, from fen.
                        <br></br>They shared a wish, a hope, a dream, They hatched a daring plan
                        <br></br>
                        To educate young sorcerers Thus Hogwarts School began.
                        <br></br>
                        Now each of these four founders Formed their own house,<br></br>
                        for each Did value different virtues In the ones they had to teach.<br></br>
                        By Gryffindor, the bravest were Prized far beyond the rest;<br></br>
                        For Ravenclaw, the cleverest Would always be the best;
                        <br></br>For Hufflepuff, hard workers were Most worthy of admission;<br></br>
                        And power-hungry Slytherin Loved those of great ambition.
                        <br></br>
                        While still alive they did divide Their favorites from the throng,
                        <br></br>Yet how to pick the worthy ones When they were dead and gone?
                        <br></br>‘Twas Gryffindor who found the way, He whipped me off his head<br></br>
                        The founders put some brains in me So I could choose instead!
                        <br></br>Now slip me snug about your ears,<br></br>
                        I’ve never yet been wrong,
                        <br></br>I’ll have a look inside your mind<br></br>
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

                <div className="middle aligned column">

                    <h1 className="nameOfHouseHeading" id="place"></h1>
                </div>
            </div>

        </div>
    );
}

export default Hat;
