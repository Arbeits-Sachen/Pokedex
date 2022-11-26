import { useState } from "react";

console.log(useState);

function CaughtPokemon(props)
{
    const[caught, setCaught] = useState([]);

    function catchPokemon()
    {
        setCaught(caught.concat(props.pokemon[Math.floor(Math.random() * props.pokemon.length)]));
    }

    return(
        <div>
            <p>Caught {caught.length} Pokemon on {props.date}</p>
            <ul>
                {caught.map((item, index) => 
                {
                    return <li key={index}>{item}</li>;
                })}
            </ul>
            <button onClick={catchPokemon}>Catch Pokemon</button>
        </div>
    )
}


export default CaughtPokemon;