const Logo = (props) =>
(
    <header>
        <h1>Welcome to {props.appName} pokedex</h1>
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="pokemon-img" onClick={props.logWhenClicked}></img>
    </header>
);

export default Logo;