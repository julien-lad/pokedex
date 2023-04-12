/*function NavBar ({pokemonList}){
    return(
    <> 
    {pokemonList.map((pokemon, index) =>(
        <button key={index}>
            {pokemon.imageName}
        </button>
    ))    
    }
    </>
)
}*/

function NavBar({ pokemonList, handleSelect }) {
    const handleButtonClick = (index) => {
      handleSelect(index); // Appeler la fonction de gestion de sélection depuis les boutons
    };
  
    return (
      <>
        {pokemonList.map((pokemon, index) => (
          <button key={index} onClick={() => handleButtonClick(index)}>
            {pokemon.imageName}
          </button>
        ))}
      </>
    );
  }


// manque des éléments, 
//modifier le state qui est définit dans app mais depuis NavBar
 export default NavBar