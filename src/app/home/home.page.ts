import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  array: string[] = ["hola", "karen", "como", "estás"];
  mostrarElemento: boolean = true;
  toogleMostrarElemento() {
    this.mostrarElemento = !this.mostrarElemento;
    }
    
  constructor() {
    
    
  }

  ngOnInit() {
  function saludo() {
        let saludar = "hola";
        let chau = "chau";
        return saludar + chau;
      }
  }


 
}
