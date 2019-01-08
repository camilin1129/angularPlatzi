import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DetalleComponent} from './detalle/detalle.component';
import {LugaresComponent} from './lugares/lugares.component';

const appRoutes: Routes = [
    {path:'', component: LugaresComponent},
    {path:'lugares', component: LugaresComponent},
    {path:'detalle', component: DetalleComponent}
];

@NgModule({
  declarations: [
    AppComponent,
      ResaltarDirective,
      ContarClicksDirective,
      DetalleComponent,
      LugaresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      FormsModule,
      AgmCoreModule.forRoot({
          apiKey: 'AIzaSyBeCv4JJ2G6feS37yKisVMqj6I5N_8feNk'
      }),
      BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
