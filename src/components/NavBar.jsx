
function NavBar ({handlePrevious, handleNext}){
    
    return(
    <>
    <button onClick={handlePrevious}>précedent</button> 
    <button onClick={handleNext}>Suivant</button>     
    </>
)
}

 export default NavBar