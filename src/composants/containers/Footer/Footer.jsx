export default function Footer(){

    function contact() {
        alert ('contact')
    }

    return(
            <footer>
    <a href="#">Mentions Légales</a>
    <a href="#" >Politique de Confidentialité</a>
    <a href="#">Contact</a>
    <Bouton couleur = {'blue'} gereClique={contact}>
          <p>Foot</p>
        </Bouton>
</footer>

    )
}