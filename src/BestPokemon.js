const BestPokemon = (props) =>
(
    <div>
        <p>My favorite Pokemon is: N/A</p>
        <ul>
            {props.abilities.map((ability) =>
            (
                <li>{ability}</li>
            ))}
        </ul>
    </div>
);

export default BestPokemon;