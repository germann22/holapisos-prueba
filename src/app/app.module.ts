import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LOCALE_ID } from '@angular/core';
import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { CardsInmueblesComponent } from './components/cards/cards-inmuebles/cards-inmuebles.component';
registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    CardsInmueblesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LazyLoadImageModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es-ES' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
