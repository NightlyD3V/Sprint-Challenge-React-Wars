import React from 'react';
import './StarWars.css';

function StarWarsCard(props) {
    //console.log(props.character);
    console.log(props.film);
    return (
        <div className="card-container">
            <h1 className="character-name">{props.character.name}</h1>
            <h2>Birth Year: {props.character.birth_year}</h2>
            <ul className="list-films">
                <li>
                    {props.films[0]}
                </li>
                <li>
                    {props.films[1]}
                </li>
                <li>
                    {props.films[2]}
                </li>
            </ul>
        </div>
    )
}

export default StarWarsCard