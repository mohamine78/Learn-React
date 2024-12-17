// un composant react
import React from "react";
<<<<<<< HEAD
import { Header } from './composants/containers/Header/Header';
import { Footer } from "./composants/containers/Footer/Footer";
=======
import Header from './composants/containers/Header/Header';
import Footer from "./composants/containers/Footer/Footer";
>>>>>>> e69f36a (export default fixed)
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
