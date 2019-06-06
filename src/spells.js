import React from 'react';
import './spells.css';

const Spells = () => {

    const key = '$2a$10$T.PmsIULcnz1o3Cbl.XBHO/kjyJ3ZWOKETv4VD5WMaxwQfA16C4p6';

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
            const ul = document.getElementById('spells');
            spells.map(function (spell) {
                let col = createNode('div'),
                    div = createNode('div'),
                    divContent = createNode('div'),
                    h1 = createNode('h1'),
                    p = createNode('p');
                col.className = "col"
                div.className = "card w-50"
                divContent.className = "card-body"
                h1.className = "card-title"
                p.className = "card-text"
                h1.innerHTML = `${spell.spell}`;
                p.innerHTML = `${spell.effect} `;
                append(col, div);
                append(div, divContent);
                append(divContent, h1);
                append(divContent, p);
                append(ul, div);
            })
        })
        .catch(error => console.log('Uuups, something went wrong! ', error));

    return (
        <div className="container">
            <div className="row spellsPage" id="spells"></div>
        </div>
    )
}

export default Spells;