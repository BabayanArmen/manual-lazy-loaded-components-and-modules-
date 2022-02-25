import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BRoutingModule } from './b-routing.module';
import { LazyHomeComponent } from './lazy-home/lazy-home.component';


@NgModule({
  declarations: [
    LazyHomeComponent
  ],
  imports: [
    CommonModule,
    BRoutingModule
  ]
})
export class BModule { }
