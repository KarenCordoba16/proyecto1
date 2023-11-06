import { Component } from '@angular/core';

// Desarrolle en TypeScript las siguientes funciones:
// Devolver  un saludo "Buenas tardes" concatenado a un nombre (string) 
// y que dicho nombre se ingrese como parametro

function saludarPorLaTarde(nombre: string): string {
  const mensaje = `Buenas tardes, ${nombre}!`;
  return mensaje;
}

// const nombre = "Karen";
const saludo = saludarPorLaTarde("Karen");
console.log(saludo);
// --------------------------------------------------------------------
// La multiplicacion de dos numeros
function multiplicarNumeros(numero: number, numero2: number) {
  let resultado = numero*numero2;
  return resultado
}

// let num1 = 5;
// let num2 = 7;
const multiplicar = multiplicarNumeros(4,2);
console.log("El resultado de la multipliación es: ",multiplicar)
// --------------------------------------------------------------------
// La suma de 3 numeros

function sumarNumeros(numero: number, numero2: number, numero3: number) {
  let resultado = numero+numero2+numero3;
  return resultado
}

// let nro1 = 5;
// let nro2 = 7;
// let nro3 = 10;
const sumar = sumarNumeros(1, 2, 3);
console.log("El resultado de la suma es: ",sumar)
// ------------------------------------------------------------------------
// Dado un parametro "number" evalue si este es mayor a 18 y lo retorne

function esMayor(edad: number): boolean {
  return edad >= 18;
}

// let num = 17;
const mayor = esMayor(17);
console.log("Es mayor?: ",mayor)
// -----------------------------------------------------------
// Desarrolle en TypeScript los siguientes procedimientos:
// Un procedimiento que recorra una lista de Personas y que imprima por consola por cada nombre 
// "Buenas tardes" + valor del nombre.

interface Personas {
  nombres: string;
}
function saludarPersona(persona: Personas[]): void {
  persona.forEach(persona => {
    console.log(`Buenos días, ${persona.nombres}`);
  });
}
const lista: Personas[] = [
  { nombres: "Florencia" },
  { nombres: "Martín" },
  { nombres: "Micaela" },
];
const personaSaludar = saludarPersona(lista);
// ----------------------------------------------------------------
// Un procedimiento que recorra una lista y que muestre aquellas personas mayores de edad
interface Mayores {
  nombrepers: string;
  edadpers: number;
}

function persMayor(permay: Mayores []): void {
  permay.forEach(permay => {
    if (permay.edadpers >= 18) {
      console.log(`${permay.nombrepers} es mayor de edad`);
    }
  });
}

const list: Mayores[] = [
  { nombrepers: "Florencia" , edadpers: 20},
  { nombrepers: "Martín", edadpers: 10},
  { nombrepers: "Micaela", edadpers: 18 },
];
const listaMayores = persMayor(list);

// -----------------------------------------------------------


interface Persona {
  nombre: string;
  apellido: string;
  edad: number;
  estado: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage {

  condicion: boolean = true;
  person: Persona[] = [
    {
      nombre: "Nicolás",
      apellido: "Guzmán",
      edad: 25,
      estado: 'activo',
    },
    {
      nombre: "Julieta",
      apellido: "González",
      edad: 18,
      estado: 'inactivo',
    }
  ];

  personaAgregar: Persona = {
    nombre: '',
    apellido: '',
    edad : 0,
    estado: ''
  };

  agregarPersonas() {
    if (this.personaAgregar.nombre && this.personaAgregar.apellido && this.personaAgregar.edad > 0) {
      this.person.push(this.personaAgregar);
      this.personaAgregar = {
        nombre: '',
        apellido: '',
        edad : 0,
        estado: ''
      };
    }
  }
}
