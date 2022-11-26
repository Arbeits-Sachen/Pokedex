import { useState } from "react";

function CaughtPokemon(props)
{
    const[caught, setCaught] = useState([]);
    const[pokemonNameInput, setPokemonNameInput] = useState("");

    function catchPokemon()
    {
        if(pokemonNameInput !== "")
        {
            setCaught(caught.concat(pokemonNameInput));
            setPokemonNameInput("");
        }
    }

    function handleInputChange(event)
    {
        setPokemonNameInput(event.target.value);
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
            <input type="text" value={pokemonNameInput} onChange={handleInputChange}/>
            <button onClick={catchPokemon}>Catch Pokemon</button>
        </div>
    )
}

export default CaughtPokemon;
