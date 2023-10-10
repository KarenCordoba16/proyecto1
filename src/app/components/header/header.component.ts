import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  saludo = "Good night ";
  nombre = "Karen";

  constructor() { }

  ngOnInit() {}

  miEvento()
    {
      console.log(this.saludo + this.nombre)
    }
}
