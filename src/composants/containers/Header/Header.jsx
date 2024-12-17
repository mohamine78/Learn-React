import classes from "./Header.module.css"

export default function Header(){

    const userFromDB = {
        email: "feef",
        isLoggedIn: true,
    }


    const paragrapheStyle = {
        backgroundColor : "purple",
        fontSize: "1.2em",
        color: userFromDB.isLoggedIn ? "green" : "red"
    }

    return (<header className={classes.container}>
        <h1 className={classes.titre}>Bonjour</h1>
        <p style={paragrapheStyle}>Bonjour tout le monde</p>
    </header>
    )
}
