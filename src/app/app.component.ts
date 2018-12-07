import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'platzisquare';
  listo = false;
  constructor (){
    setTimeout(() => {
      this.listo = true;
    }, 3000)
  }

  a = 0;
  hacerAlgo(){
    setTimeout(() => {
        this.a += 1;
        }, 1000)
  }
}
