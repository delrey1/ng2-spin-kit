import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {Ng2SpinKit2Module} from "../../projects/ng2-spin-kit2/src/lib/ng2-spin-kit2.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    Ng2SpinKit2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
