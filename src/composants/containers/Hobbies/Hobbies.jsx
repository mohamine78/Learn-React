import PropTypes from "prop-types";

export default function Hobbies({ hobbies }) {
  if (!hobbies.length) {
    return <p>Aucun hobby disponible.</p>;
  }

  const styles = {
    listItem: {
      padding: "10px",
      border: "1px solid white",
      margin: "0.5em",
    },
  };

  return (
    <ul>
      {hobbies.map((hobby) => (
        <li key={hobby.id} style={styles.listItem}>
          {hobby.nom}
        </li>
      ))}
    </ul>
  );
}

Hobbies.propTypes = {
  hobbies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nom: PropTypes.string.isRequired,
    })
  ).isRequired,
};
