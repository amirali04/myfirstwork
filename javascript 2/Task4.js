//Task# 04
const person = {
    name: "Amir",
    age: 20,
    email: "amirali23072@gmail.com"
};
function introducePerson(person) {
    return "Hi, my name is " + person.name + ". I'm " + person.age + " years old and my email is " + person.email + ".";
}
console.log(introducePerson(person));
