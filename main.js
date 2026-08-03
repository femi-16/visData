
//Function to repeat for all results in the people array
for (let i = 0; i < people.length; i++){
    console.log(people.length)

let displayPerson = people[i].results[0]



const originalPersondiv = document.getElementById("person_content");
//establishes the original div
const newPerson = originalPersondiv.cloneNode(true);
//clones the original div
newPerson.querySelector("#name").innerHTML += ` ${displayPerson.name.title}  ${displayPerson.name.first}  ${displayPerson.name.last}`
newPerson.querySelector("#age").innerHTML += `${displayPerson.dob.age}`
newPerson.querySelector("#address").innerHTML += `${displayPerson.location.street.number} ${displayPerson.location.street.name} ${displayPerson.location.city}, ${displayPerson.location.state}`
newPerson.querySelector("#person_img").src = displayPerson.picture.large;
newPerson.querySelector("#gender").innerHTML += `${displayPerson.gender}`


document.body.appendChild(newPerson);
//adds the newly created div to the end
}
