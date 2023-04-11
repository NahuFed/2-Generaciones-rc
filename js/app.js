// 5- Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura,
// año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué
// generación pertenece la persona creada y cual es el rasgo característico de esta
// generación.
// esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la
// persona es mayor de edad.
// mostrarDatos: devuelve toda la información del objeto.
// generaDNI(): genera un número aleatorio de 8 cifras.

function determinarGeneracion(edad) {
  if (edad <= 29 && edad >= 13) {
    return "Generacion Z";
  } else if (edad <= 42 && edad >= 30) {
    return "Generacion Y";
  } else if (edad <= 54 && edad >= 43) {
    return "Generacion X";
  } else if (edad <= 74 && edad >= 55) {
    return "Baby Boom";
  } else if (edad <= 93 && edad >= 75) {
    return "Silent Generation";
  }
}

class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
  }
  get generacion() {
    return determinarGeneracion(this.edad);
  }
  get esMayorDeEdad() {
    return this.edad >= 18 ? "Es mayor de edad" : "No es mayor de edad";
  }
  get mostrarDatos() {
    return `
      Nombre: ${this.nombre}  
      Edad: ${this.edad} 
      Dni: ${this.dni} 
      Sexo: ${this.sexo} 
      Peso: ${this.peso} 
      Altura: ${this.altura}`;
  }
  generaDNI() {
    this.dni = Math.floor(Math.random() * 99999999) + 1;
  }
}

let formulario = document.querySelector("form");

formulario.addEventListener("submit", capturarInformacion);

function capturarInformacion(e) {
  let nombrePersona = document.getElementById("nombre").value;
  let edadPersona = document.getElementById("edad").value;
  let dniPersona = document.getElementById("dni").value;
  let pesoPersona = document.getElementById("peso").value;
  let alturaPersona = document.getElementById("altura").value;
  let sexoPersona = document.querySelector('input[name="sexo"]:checked').value;

  let persona = new Persona(
    nombrePersona,
    edadPersona,
    dniPersona,
    sexoPersona,
    pesoPersona,
    alturaPersona
  );
  alert(
    persona.mostrarDatos +
      "\nGeneracion: " +
      persona.generacion +
      "\n" +
      persona.esMayorDeEdad
  );
  e.preventDefault();
  console.log(nombrePersona);
}

//   let nahuel = new Persona("Nahuel", 27, 39077984, "H", 70, 175);
