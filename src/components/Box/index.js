import React from "react";
import "./style.css";

function Box({ person }) {
    const name = person.name.title.large + ". " + person.name.first + " " + person.name.last;
    const age = person.dob.age;
    const gender = person.gender;
    const phone = person.phone;
    const email = person.email;

    const picture = person.picture.large;

    return (
        <div class="myrow">
            <div class="left">
                <img src={picture} alt="Someone's face"></img>
            </div>
            <ul>
                <li><span class="bold">Name: </span>{name}</li>
                <li><span class="bold">Gender: </span>{gender}</li>
                <li><span class="bold">Age: </span>{age}</li>
                <li><span class="bold">Phone: </span>{phone}</li>
                <li><span class="bold">email: </span>{email}</li>

            </ul>
        </div>
    );
}

export default Box;