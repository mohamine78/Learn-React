// un composant react
import React from "react";

import Header from './composants/containers/Header/Header';
import Footer from "./composants/containers/Footer/Footer";
import User from "./composants/containers/User/User";

function App() {
const nom = "Mohammed";


//Composant React parameter
function Bouton({label, couleur}){

return <button style ={{ backgroundColor: couleur}}>{label}</button>
}
  return (
    <>
    <Header/>
      <h1>{nom}</h1>
      <User/>
      
      {Bouton({label: "Valider", couleur: "green"})}
      {Bouton({label: "Supprimer", couleur: "red"})}
      <Bouton label="Hello" couleur="purple"></Bouton>


      <Footer/>
    </>
  )
}

export default App
