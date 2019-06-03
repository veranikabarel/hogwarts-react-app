import React from 'react';
import './houses.css';

const Houses = () => {
    const key = '$2a$10$2rQESbw867XLuzli.BEiKO3fJqGid1E75vSLsy38DUo3/ypMJ0jTO';
    const url = new URL('https://www.potterapi.com/v1/houses'),
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
            let house = data;
            const ul = document.getElementById('houses');
            house.map(function (house) {
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
                h1.innerHTML = `${house.name}`;
                p.innerHTML = `Founder: ${house.founder} <br> Head of House:  ${house.headOfHouse} <br> House values: ${house.values}<br> House colors: ${house.colors} `;
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
            <div className="row" id="houses"></div>
        </div>
    )
}

export default Houses;