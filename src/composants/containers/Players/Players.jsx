export default function Players() {
    const resultat = 255;
    const score = 50;

    const estGagnant = score >= resultat
    return (
        <section style={{padding: "o.7em", border:"1px solid white"}}>
            <h2 style={{ color: estGagnant ? "green" : "red" }}>PLAYER SCORE: {resultat}</h2>
            <p style={{ color: score > 50 ? "green" : "red" }}>{estGagnant ? "Vainqueur" : "Perdant"} -Score = {score}</p>
            </section>
    );
}
