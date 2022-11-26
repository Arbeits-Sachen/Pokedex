import './App.css';
import Logo from "./Logo.js"
import BestPokemon from "./BestPokemon.js"
import CaughtPokemon from "./CaughtPokemon.js"
import PokemonMovesSelector from './PokemonMovesSelector';
import PokemonCity from './PokemonCity';

function App()
{
  const logWhenClicked = () =>
  (
    console.log("hi")
  )
  return (
    <div className="App">
      <Logo appName = "Kerim's" logWhenClicked = {logWhenClicked}/>
      <BestPokemon abilities = {['Anticipation', 'Adaptability', 'Run-Away']}/>
      <CaughtPokemon pokemon = {["N/A_1", "N/A_2", "N/A_3"]} date = {new Date().toLocaleDateString()}/>
      <PokemonMovesSelector/>
      <PokemonCity/>
    </div>
  );
}



export default App;
