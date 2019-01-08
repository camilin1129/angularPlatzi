import { Component } from '@angular/core';

@Component({
    selector: 'app-lugares',
    templateUrl: './lugares.component.html'
})
export class LugaresComponent {
    title = 'platzisquare';
    lugares: any = [
        {clicks: '', plan: 'Pagado', cercania: 1, distancia: 1, active: true, nombre: 'Floreria la Gardenia'},
        {clicks: '', plan: 'Gratuito', cercania: 1, distancia: 1.8, active: true, nombre: 'Donas la pasadita'},
        {clicks: '', plan: 'Gratuito', cercania: 2, distancia: 5, active: true, nombre: 'Veterinaria Huellitas felices'},
        {clicks: '', plan: 'Gratuito', cercania: 3, distancia: 10, active: false, nombre: 'Sushi Sushiroll'},
        {clicks: '', plan: 'Pagado', cercania: 3, distancia: 35, active: true, nombre: 'Hotel la Gracia'},
        {clicks: '', plan: 'Gratuito', cercania: 3, distancia: 10, active: false, nombre: 'Zapateria el Clavo'}
    ];
    lat:number = 4.7186655;
    lng:number = -74.0356525;
    constructor(){
    }
}
