import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {WaveComponent} from "ng2-spin-kit2";

@NgModule({
  declarations: [
    AppComponent,
    WaveComponent
  ],
  imports: [
    BrowserModule,
    // Ng2SpinKit2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
