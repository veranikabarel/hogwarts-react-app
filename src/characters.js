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
                let div = createNode('div'),
                    divContent = createNode('div'),
                    h1 = createNode('h1'),
                    p = createNode('p');

                div.className = "ui card"
                divContent.className = "content"
                h1.className = "header"
                p.className = "description"
                h1.innerHTML = `${character.name}`;
                p.innerHTML = `School: ${character.school} <br> Blood status:  ${character.bloodStatus} <br> House: ${character.house}<br> Wand: ${character.wand} `;

                append(div, divContent);
                append(divContent, h1);
                append(divContent, p);
                append(ul, div);
            })
        })
        .catch(error => console.log('Uuups, something went wrong! ', error));

    return (
        <div className="ui centered container">
            <div className="ui two cards" id="characters"></div>
        </div>
    )
}

export default Characters;