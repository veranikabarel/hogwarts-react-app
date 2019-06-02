import React from 'react';
import './characters.css';

const key = '$2a$10$2rQESbw867XLuzli.BEiKO3fJqGid1E75vSLsy38DUo3/ypMJ0jTO';

class Characters extends React.Component {

    state = {
        name: undefined,
        house: undefined,
        bloodStatus: undefined,
        wand: undefined,
        dumbledoresArmy: undefined,
        orderOfThePhoenix: undefined
    }

    getCharacter() {

        const url = new URL('https://www.potterapi.com/v1/characters');
        const params = {
            key: key
        }
        Object
            .keys(params)
            .forEach(key => url.searchParams.append(key, params[key]))

        fetch(url, {key: key}).then((resp) => resp.json())
            .then(function (data) {
                console.log(data);
                this.setState({
                    name: data.name,
                    house: data.house,
                    bloodStatus: data.bloodStatus,
                    wand: data.wand,
                    dumbledoresArmy: data.dumbledoresArmy,
                    orderOfThePhoenix: data.orderOfThePhoenix,
                    error: ''
                });

            });
    }

    render() {
        return (
            <div className="row">
                <div className="col">
                    <h3 className="charactersHeading">The wizarding world is filled with memorable
                        characters. If they have a name, you’ll find them here.</h3>
                    <form className="form-inline my-2 my-lg-0">
                        <input
                            onSubmit={this.props.getCharacter}
                            className="form-control-lg"
                            type="search"
                            placeholder="Enter the name"
                            aria-label="Search"></input>
                        <button className="btn" type="submit">Search</button>
                    </form>
                </div>

                <div className="col">
                    <p>{this.props.name}</p>
                    <p>{this.props.house}</p>
                    <p>{this.props.bloodStatus}</p>
                    <p>{this.props.wand}</p>
                    <p>{this.props.dumbledoresArmy}</p>
                    <p>{this.props.orderOfThePhoenix}</p>
                </div>
            </div>
        )
    }
}

export default Characters;