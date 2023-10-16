import { Component, OnInit } from '@angular/core';

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

export class HomePage implements OnInit {
  constructor() { }
  condicion: boolean = true;
  items = ['Elemento 1', 'Elemento 2', 'Elemento 3'];

  addItem() {
    this.items.push('Nuevo elemento');
  }
  
  person: Persona[] = [
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
  ngOnInit(): void {
    this.person = [
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



