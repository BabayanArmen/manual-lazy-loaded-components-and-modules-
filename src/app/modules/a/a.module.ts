import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ARoutingModule } from './a-routing.module';
import { LazyAHomeComponent } from './lazy-ahome/lazy-ahome.component';


@NgModule({
  declarations: [
    LazyAHomeComponent
  ],
  imports: [
    CommonModule,
    ARoutingModule
  ]
})
export class AModule {
  constructor() {
    console.log('module A is loaded');
  }
}
