const nombre = prompt("¿Cuál es tu nombre?", "")
console.log(nombre)
alert("Hola " + nombre)

const email = prompt("¿Cuál es tu correo electrónico", "")
console.log(email)

//validación de correo electrónico que tenga una @ o si tipo es string
if (email.includes("@")) {
    alert("Tu correo ingresado es " + email)
} else {
    alert ("Esta mal escrito el correo")
}
