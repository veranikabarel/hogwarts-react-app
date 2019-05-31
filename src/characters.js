import React from 'react';
import './characters.css';

const Characters = () => {
    return (
        <div className="row">
            <div className="col">
                <h3 className="charactersHeading">The wizarding world is filled with memorable
                    characters. If they have a name, you’ll find them here.</h3>
                <form className="form-inline my-2 my-lg-0">
                    <input
                        className="form-control-lg"
                        type="search"
                        placeholder="Enter the name"
                        aria-label="Search"></input>
                    <button className="btn" type="submit">Search</button>
                </form>
            </div>
            <div className="col"></div>
        </div>
    )
}

export default Characters;