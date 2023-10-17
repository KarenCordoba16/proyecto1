import { Component } from '@angular/core';

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
      estado: "inactivo",
    },
    {
      nombre: "Julieta",
      apellido: "González",
      edad: 18,
      estado: "activo",
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
        estado:'inactivo'
      };
    }
  }
}