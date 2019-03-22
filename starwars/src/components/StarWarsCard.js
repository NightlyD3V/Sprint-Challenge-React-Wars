import React from 'react';

function StarWarsCard(props) {
    console.log(props.character);
    return (
        <div>
            <img src={props.character.url} alt="No Image"/>
            <h1 className="character-name">{props.character.name}</h1>
        </div>
    )
}

export default StarWarsCard