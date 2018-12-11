import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'platzisquare';
  lugares: any = [
      {active: true, nombre: 'Floreria la Gardenia'},
      {active: true, nombre: 'Donas la pasadita'},
      {active: true, nombre: 'Veterinaria Huellitas felices'},
      {active: false, nombre: 'Sushi Sushiroll'},
      {active: true, nombre: 'Hotel la Gracia'},
      {active: false, nombre: 'Zapateria el Clavo'}
  ];
  lat: number = 4.7186655;
  lng: number = -74.0356525;

    personas: any = [
        {nombre: 'Juan Perez', edad: 18},
        {nombre: 'Carlos Camargo', edad: 29},
        {nombre: 'Pedro Melo', edad: 15},
        {nombre: 'Andres Chacho', edad: 17},
        {nombre: 'Hernesto Perro', edad: 18},
        {nombre: 'Caro rico', edad: 19},
        {nombre: 'Coni Chupa', edad: 12},
    ];
  constructor (){
  }
}
