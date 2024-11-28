## NOMBRE PROYECTO 
Barrio Sano | Clínica Preventiva Comunitaria

## DESCRIPCIÓN GENERAL DEL PROYECTO
Para el taller 2 Módulo 3 se implementa en la página de la clínica nuevas funcionalidades como: manejo de entorno y ejecución de consola; manejo de varibles, operadores y prompts; uso de la interfaz con ciclos e iteraciones y manejo de errores con try/catch y debugging.

## INSTRUCCIONES PARA ABRIR EL PROYECTO
- Ejercicio 2 (Manejo de Variables, Operadores y Prompt): en página contacto.html

- Ejercicio 3 (Ciclos e Iteraciones: Uso en la Interfaz): en la página ciclo-iteraciones.html


## ESTRUCTURA DE CARPETAS Y ARCHIVOS
- assets
    - images
    - js
        -app.js
        -app2.js
    - styles
- ciclos-iteraciones.html
- index.html
- equipo-medico.html
- contacto.html
- reservar-cita.html
- README

## DESCRIPCIÓN BREVE DE CADA PÁGINA

### Home: 
Se encuentran las secciones de bienvenida con el slogan de la clínica donde se resalta la  misión y visión. Más abajo, se encuentran los servicios principales que brinda la clínica y al final el testimonio de varios pacientes.

### Equipo médico: 
Se presenta el equipo médico de la clínica con sus respectivos perfiles profesionales y el compromiso de la clínica para la excelencia médica.

### Contacto: 
Se encuentra un formulario de contacto y un mapa de ubicación de la clínica en la ciudad de Santiago de Chile.


## IMPLEMENTACIÓN DE MODULARIZACIÓN DE ESTILOS

### METODOLOGÍA BEM

Se implementa la metodología BEM para la creación de componentes reutilizables y evitar la duplicación de código. Se define un sistema claro de nombres para las clases CSS.

### ESTRUCTURA SASS

Se implementa el patrón 7-1 con la siguiente organización:

- abstracts
- base
- components
- layout
- page
- themes
- vendors

## VARIABLES LET Y CONST

- let: permite reasignar valores después de declararla.
- const: es constante y no permite reasignar valores después de declararla. 


## FUNCIONAMIENTO DE EVENTO LOOP (STACK, HEAP Y QUEUE)

Permite a JavaScript gestionar tareas asincrónicas sin bloquear el hilo principal y se asegura de que la pila esté vacía antes de mover tareas desde las colas.

- Stack: es la pila de ejecución. Ordena y ejecuta las funciones de manera síncrona. El Event Loop no puede procesar nuevas tareas hasta que el stack esté vacío. Mantiene el control de qué función debe continuar después de que una función termina.
- Heap: no está directamente relacionado con el Event Loop, pero es fundamental para gestionar y almacenar datos que se utilizan dentro las funciones manejadas por el Stack y procesadas por el Event Loop. 
- Queue: asegura que las operaciones asíncronas se gestionen correctamente sin bloquear la ejecución del código síncrono.

## DEBUGGER
La búsqueda (y corrección) de errores en el código de programación se denomina debugging.
Para activar el debugger hay que ingresar en el navegador, por ejemplo Chrome DevTools permite detener la ejecución del código JavaScript en una línea específica para inspeccionar variables, evaluar expresiones y entender el flujo de tu programa. 

## CRÉDITOS:

- Desarrollo Front-End: Carla García Becerra
- Diseño UX: Carla García Becerra
- Foto portada de: [@TomFisk] (https://www.pexels.com/es-es/foto/hospital-junto-al-estacionamiento-de-vehiculos-y-la-carretera-por-la-noche-1692693/)
- Foto doctora 1 de: [@TimaMiroshnichenko] (https://www.pexels.com/es-es/foto/gente-mujer-escritorio-oficina-8376277/)
- Foto doctor 2 de: [@UsmanYousaf] (https://pixabay.com/es//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5997511)
- Foto doctora 3 de: [@JeffDenlea] (https://www.pexels.com/es-es/foto/mujer-en-bata-medica-blanca-3714743/)
- Foto de doctora 4 de: [@TimaMiroshnichenko] (https://www.pexels.com/es-es/foto/persona-mujer-cuaderno-oficina-5407217/)
