import PropTypes from 'prop-types';

Bouton.propTypes = {
    couleur: PropTypes.string,
    couleur: PropTypes.node.isRequired,
    gereClique:PropTypes.func.isRequired
}

export default function Bouton({ couleur, children, gereClique }){

    function gereClique(){
        alert('Je suis cliqué')
    }

    return(<button 
        onClick={gereClique}
        className="b-none p-2 rounded hover:opacity-75 transition"
        style={{
        backgroundColor: couleur ? couleur : "black"}}
        >
    {children}
    </button>)
}