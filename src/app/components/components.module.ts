import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { CoponentepruebaComponent } from '../coponenteprueba/coponenteprueba.component';


@NgModule({
  declarations: [HeaderComponent, CoponentepruebaComponent],
  imports: [CommonModule , IonicModule],
  exports: [HeaderComponent, CoponentepruebaComponent]
})
export class ComponentsModule { }
