import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './components/PokemonCard'
import { useState } from 'react'
import NavBar from './components/NavBar'

const pokemonListe = [
  {
      imageName: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      imageName: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      imageName: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      imageName: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      imageName: "mew",
    },
  ];

 
  function App() {
    const [pokemonIndex, setPokemonCount] = useState(0);

    const handlePrevious = () => {
      if (pokemonIndex > 0) setPokemonCount(pokemonIndex - 1)
    }
  
    const handleNext = () => {
      if (pokemonIndex < pokemonListe.length - 1) setPokemonCount(pokemonIndex + 1)
    }
    
    return (
    <>
      <PokemonCard pokemon = {pokemonListe[pokemonIndex]}/>
      <NavBar handlePrevious = {handlePrevious} handleNext = {handleNext}/>
    </>
    );
}

export default App
