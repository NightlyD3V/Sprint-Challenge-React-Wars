import React from 'react';
import './StarWars.css';

function StarWarsCard(props) {
    //console.log(props.character);
    return (
        <div className="card-container">
            <h1 className="character-name">{props.character.name}</h1>
            <h2>Birth Year: {props.character.birth_year}</h2>
            <ul className="list-films">
                <li>
                    {props.films[0] ? props.films[0] : 'No Film :('}
                </li>
                <li>
                    {props.films[1] ? props.films[1] :'No Film :('}
                </li>
                <li>
                    {props.films[2] ? props.films[2] :'No Film :('}
                </li>
                <li>
                    {props.films[3] ? props.films[3] :'No Film :('}
                </li>
                <li>
                    {props.films[4] ? props.films[4] :'No Film :('}
                </li>
            </ul>
        </div>
    )
}

export default StarWarsCard