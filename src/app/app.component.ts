import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'platzisquare';
  lugares: any = [
      {plan: 'Pagado', cercania: 1, distancia: 1, active: true, nombre: 'Floreria la Gardenia'},
      {plan: 'Gratuito', cercania: 1, distancia: 1.8, active: true, nombre: 'Donas la pasadita'},
      {plan: 'Gratuito', cercania: 2, distancia: 5, active: true, nombre: 'Veterinaria Huellitas felices'},
      {plan: 'Gratuito', cercania: 3, distancia: 10, active: false, nombre: 'Sushi Sushiroll'},
      {plan: 'Pagado', cercania: 3, distancia: 35, active: true, nombre: 'Hotel la Gracia'},
      {plan: 'Gratuito', cercania: 3, distancia: 10, active: false, nombre: 'Zapateria el Clavo'}
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
