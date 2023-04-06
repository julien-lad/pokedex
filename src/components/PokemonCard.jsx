function PokemonCard({imageName, imgSrc}){
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


export default PokemonCard;