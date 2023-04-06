import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './components/PokemonCard'

const pokemonOne =
    {
      imageName: "bulbasaur",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    }
const  pokemonTwo =

    {
      imageName: "mew",
    }
 

  
  function App() {
    return (
    <>
      <PokemonCard {...pokemonOne}/>
      <PokemonCard {...pokemonTwo}/>
    </>
    )
}


export default App
