// Implementar un ciclo o iteración (for, while, forEach) que manipule el DOM de forma dinámica.
// Condicionales dentro del ciclo para mostrar solo elementos específicos, como doctores con más de 5 años de experiencia

const Doctor_1 = {
    nombre: "Ricardo García",
    especialidad: "Urólogo",
    experiencia: 5
};

const Doctor_2 = {
    nombre: "Boldo Contreras",
    especialidad: "Cardiólgo",
    experiencia: 3
};

const Doctora_3 = {
    nombre: "Pía Varrgas",
    especialidad: "Pediatra",
    experiencia: 6
};

const Doctora_4 = {
    nombre: "Lupita Rojo",
    especialidad: "Ginecóloga",
    experiencia: 1
};

const doctores = [Doctor_1, Doctor_2, Doctora_3, Doctora_4]
    console.log(doctores);

function listaDoctores() {
        const doc = document.getElementById('listado');
        // declaro la constante doc para guardar cada uno de los elementos del arreglo 
        // itero por cada uno de los elementos del arreglo y almaceno en la constante doc ese valor
        for (const doc of doctores) {
          // imprimo el valor de la constante doc, que corresponde a cada uno de los elementos del arreglo
            console.log(doc, '---------')
            const li = document.createElement('li')
            li.textContent = doc.nombre + "," + " " + doc.especialidad + "," + " " + doc.experiencia
            listado.appendChild(li)
        }
      }

function experiencia() {
        const listado = document.getElementById('listadoexp');
    for (const doc2 of doctores) {
        console.log (doc2, '---------')
        if (doc2.experiencia >= 5) {
            const li = document.createElement('li')
            li.textContent = doc2.nombre + "," + " " + doc2.especialidad + "," + " " + doc2.experiencia
            listado.appendChild(li)
        }
    }
}

    




