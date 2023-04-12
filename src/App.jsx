import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './components/PokemonCard'
import NavBar from './components/NavBar'
import React, { useState } from "react";
 
const pokemonList = [
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
      const [pokemonIndex, setPokemonIndex] = useState(0);

      const handleSelect = (index) => {
        setPokemonIndex(index)
      }
    
      return (
        <>
          <PokemonCard pokemon = {pokemonList[pokemonIndex]} />
          <NavBar pokemonList={pokemonList} handleSelect={handleSelect} />
        </>
      )
    
}

export default App

// a ligne 44 si besoin //<NavBar pokemonList = {handleSelect[setPokemonIndex]} />
