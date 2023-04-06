import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './components/PokemonCard'

const pokemonListe = [
    {
      imageName: "bulbasaur",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      imageName: "mew",
    }
  ]

  const pokemon = pokemonListe[0]
  
  function App() {
    return (
    <>
      <PokemonCard {...pokemon}/>
    </>
    )
}


export default App
