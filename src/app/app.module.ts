import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      FormsModule,
      AgmCoreModule.forRoot({
          apiKey: 'AIzaSyBeCv4JJ2G6feS37yKisVMqj6I5N_8feNk'
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
