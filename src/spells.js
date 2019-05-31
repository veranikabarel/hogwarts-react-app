import React from 'react';
import './spells.css';

const Spells = () => {

    const key = '$2a$10$T.PmsIULcnz1o3Cbl.XBHO/kjyJ3ZWOKETv4VD5WMaxwQfA16C4p6';
    const ul = document.getElementById('spells');
    const url = new URL('https://www.potterapi.com/v1/spells/'),
        params = {
            key: key
        }
    Object
        .keys(params)
        .forEach(key => url.searchParams.append(key, params[key]))

    function createNode(element) {
        return document.createElement(element);
    }

    function append(parent, el) {
        return parent.appendChild(el);
    }

    fetch(url, {key: key}).then((resp) => resp.json())
        .then(function (data) {
            let spells = data;
            return spells.map(function (spell) {
                let li = createNode('li');
                li.innerHTML = `${spell.spell} : ${spell.type}, ${spell.effect}`;
                append(ul, li);
            })
        })
        .catch(error => console.log('błąd: ', error));

    return (
        <div className="container">
            <ul className="list-group" id="spells"></ul>
        </div>
    );
}

export default Spells;