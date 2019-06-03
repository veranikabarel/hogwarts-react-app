import React from 'react';
import './characters.css';

const Characters = () => {
    const key = '$2a$10$2rQESbw867XLuzli.BEiKO3fJqGid1E75vSLsy38DUo3/ypMJ0jTO';
    const url = new URL('https://www.potterapi.com/v1/characters'),
        params = {
            key: key
        }

    const createNode = (element) => {
        return document.createElement(element);
    }
    const append = (parent, el) => {
        return parent.appendChild(el);
    }

    Object
        .keys(params)
        .forEach(key => url.searchParams.append(key, params[key]));

    fetch(url, {key: key}).then((resp) => resp.json())
        .then(function (data) {
            let character = data;
            const ul = document.getElementById('characters');
            character.map(function (character) {
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
                h1.innerHTML = `${character.name}`;
                p.innerHTML = `School: ${character.school} <br> Blood status:  ${character.bloodStatus} <br> House: ${character.house}<br> Wand: ${character.wand} `;
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
            <div className="row" id="characters"></div>
        </div>
    )
}

export default Characters;