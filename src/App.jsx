import Footer from './composants/containers/Footer/Footer';
import Header from './composants/containers/Header/Header';
import User from './composants/containers/User/User';
import Bouton from './composants/ui/Bouton/Bouton';
import Players from './composants/containers/Players/Players';

function App() {

const user = {
  prenom: "Mohammed",
  nom: "HARNOUFI",
  age: 25,
  hobbies: ['Travel','Cinema','Sport'],
};
function ajouter(){
  alert('ajouter');
}

function supprimer(){
alert('supprimer');
}

  return (
    <>
      <div>
        <Header />
        <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
        <Bouton couleur = {'green'} gereClique={ajouter}>
          <p>Valider</p>
        </Bouton>
        <Bouton couleur = {'red'} gereClique={supprimer}
                        >
          <p>Valider</p>
        </Bouton>

        <User utilisateur = {user}/>
        <Players score={65} />

        <Footer />
      </div>
    </>
  )
}

export default App;

// Exercice 2: Enoncé envoyé en PDF sur Discord
// Créer un branche: exo/user
// Travailler dessus.
// Fair un Push
// Sur Github créer un Pull Request
// Ajouter Djemai-Samy en reviewer
// Me notifier