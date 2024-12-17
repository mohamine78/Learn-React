export default function User() {
    const users = [
        { firstname: "John", lastname: "Jones", hobbies: ["Voyage","Photographie","Sport"]}, 
        { firstname: "Jack", lastname: "Will", hobbies: ["Cuisine","Guitare","Lecture"]}, 
    ];
    return (
        <div>
            <p>Nom user 1: {users[0].firstname}
            prénom user 1: {users[0].lastname}
            Hobbie user 1: {users[0].hobbies}</p>

        <p>Nom user 2: {users[1].firstname}
        prénom user 2: {users[1].lastname}
        hobbie user 2: {users[1].hobbies}</p>
    </div>
    );
}