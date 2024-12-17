export default function Hobbies(){
    const hobbiesFromDB = [
    {
        id:"weifub12r23rpoj",
        nom:"HTML",
    },
    {   id:"wfweuwefwef09oj",
        nom:"CSS",
    },
    {   id:"wfj7kuytoj",
        nom:"Javascript",
    },
    {   id:"wgwrewf09oj",
        nom:"React",
    }
];
    
    return(
        <ul>
            {hobbiesFromDB.map((hobby) => {
                return (
                <li 
                key={hobby.id}
                style={{
                    padding: "10px",
                    border:"1px solid white",
                    margin: "0.5em"
                }}>
                {hobby.nom}
                </li>)
            })}
        </ul>
    )
}