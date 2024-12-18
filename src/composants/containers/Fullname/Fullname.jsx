import PropTypes from "prop-types";
import FirstName from "../../ui/Firstname/FirstName";
import LastName from "../../ui/Lastname/Lastname";

export default function FullName({nom,prenom}) {
    return (
        <div>
            <LastName nom ={nom} />
            <FirstName prenom ={prenom} />
        </div>
    )
}

FullName.propTypes = {
    nom: PropTypes.string.isRequired,
    prenom: PropTypes.string.isRequired,

}