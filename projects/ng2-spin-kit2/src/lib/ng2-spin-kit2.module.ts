import { NgModule } from '@angular/core';
import { Ng2SpinKit2Component } from './ng2-spin-kit2.component';
import {WaveComponent} from "./spinners/wave.component";



@NgModule({
  declarations: [
    Ng2SpinKit2Component,
    WaveComponent
  ],
  imports: [
  ],
  exports: [
    Ng2SpinKit2Component,
    WaveComponent
  ]
})
export class Ng2SpinKit2Module { }
