import { DesktopRoutingModule } from './desktop-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    DesktopRoutingModule
  ]
})
export class DesktopModule { }
