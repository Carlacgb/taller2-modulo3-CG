

const nombre = prompt("¿Cuál es tu nombre?", "")
console.log(nombre)
alert("Hola " + nombre)

const email = prompt("¿Cuál es tu correo electrónico", "")
console.log(email)

//validación de correo electrónico que tenga una @ o si tipo es string
if (email.includes("@")) {
    alert("Tu correo ingresado es " + email)
} else {
        alert ("Esta mal escrito el correo");
}

const telefono = prompt("Teléfono", "")

console.log(telefono)

// si el parseo del numero es "Not a Number (NaN)" entonces no es un numero válido
        
console.log(parseInt(telefono))

// parseInt(telefono) === NaN no sirve
// parseInt(telefono) == NaN no sirve
// se tiene que usar la funcion.. isNaN( string )

if (isNaN(telefono)) {
    alert("tu teléfono no es válido")
} else {
    alert("tu teléfono es " + telefono)
}

try {
    alert ("Bienvenido/as");
  }
  catch(err) {
    document.getElementById("mensaje-error").innerHTML = err.message;
  }


