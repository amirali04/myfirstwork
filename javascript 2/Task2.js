// <Task no 2>

const student = 
{
    name: "Amir",
    age: 21,
}
let studentClone = Object.assign({},student)

studentClone.lastname="Yasir";

studentClone.occupation="ai engineer";

console.log(student);

Object.assign(student, studentClone);

console.log(student);