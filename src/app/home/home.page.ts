import { Component, OnInit } from '@angular/core';

interface Persona {
  nombre: string;
  apellido: string;
  edad: number;
  estado: "activo" | "inactivo";
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  condicion: boolean = true;
  personas: Persona[] = [
  {
    nombre: "Nicolás",
    apellido: "Pérez",
    edad: 25,
    estado: "activo",
  },
  {
    nombre: "Julieta",
    apellido: "González",
    edad: 30,
    estado: "inactivo",
  },
];
  ngOnInit() {
    this.personas = [
      {
        nombre: "Nicolás",
        apellido: "Pérez",
        edad: 25,
        estado: "activo",
      },
      {
        nombre: "Julieta",
        apellido: "González",
        edad: 30,
        estado: "inactivo",
      },
    ];
  }

}



