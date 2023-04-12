import PropTypes from "prop-types";


function PokemonCard({pokemon}){
  const { imageName, imgSrc } = pokemon;
    return (

      <figure>
        {imgSrc ? (<img src={imgSrc} alt={imageName} />
        ) : 
        (<p>???</p>
        )}
        <figcaption>{imageName}</figcaption>
      </figure>
    )
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    imageName: PropTypes.string.isRequired,
    imgSrc: PropTypes.string
  }).isRequired
}


export default PokemonCard;