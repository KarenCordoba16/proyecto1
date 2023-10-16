import { Component, OnInit } from '@angular/core';

function agregarElemento(lista: string[], nuevoElemento: string) {
  lista.push(nuevoElemento);
}


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
  lista = ["elemento 1", "elemento 2", "elemento 3", "elemento 4", "elemento 5"];
  nuevoElemento: string = "nuevo elemento";


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
    agregarElemento(this.lista, this.nuevoElemento)
  }
}



