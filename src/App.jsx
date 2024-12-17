// un composant react
import React from "react";
import { Header } from './assets/composants/containers/Header/Header';
import {Footer } from "./assets/composants/containers/Footer/Footer";
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
      {Bouton({label: "Valider", couleur: "green"})}
      {Bouton({label: "Supprimer", couleur: "red"})}
      <Bouton label="Hello" couleur="purple"></Bouton>


      <Footer/>
    </>
  )
}

export default App
