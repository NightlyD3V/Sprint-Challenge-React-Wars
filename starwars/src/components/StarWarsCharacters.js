import React from 'react';
import StarWarsCard from './StarWarsCard';

function StarWarsCharacters(props) {
    console.log(props.StarWarsData);
    return (
        <div>
            {props.StarWarsData.map((characters, index) => (
                <StarWarsCard key={index} character={characters} />
            ))}
        </div>
    )
}

export default StarWarsCharacters