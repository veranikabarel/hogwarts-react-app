import React, {Component} from 'react';
import {animateScroll as scroll} from 'react-scroll';
import logo from '../assets/scrollsm.png';

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

class Spells extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    };

    constructor() {
        super();

        this.state = {
            data: null
        };
    }

    componentDidMount() {
        fetch(url, {key: key}).then((resp) => resp.json())
            .then(function (data) {
                let spells = data;
                const ul = document.getElementById('spells');
                spells.map(function (spell) {
                    let div = createNode('div'),
                        divContent = createNode('div'),
                        h1 = createNode('h1'),
                        p = createNode('p');

                    div.className = "ui card"
                    divContent.className = "content"
                    h1.className = "header"
                    p.className = "description"
                    h1.innerHTML = `${spell.spell}`;
                    p.innerHTML = `${spell.effect} `;

                    append(div, divContent);
                    append(divContent, h1);
                    append(divContent, p);
                    append(ul, div);
                })
            })
            .catch(error => console.log('Uuups, something went wrong! ', error));
    }
    
    render() {
        return (
            <div className="ui container">
                <div className="ui four stackable cards" id="spells"></div>
                <img src={logo} className="scroll-logo" alt="Logo" onClick={this.scrollToTop}/>
            </div>
        )
    }
}

export default Spells;