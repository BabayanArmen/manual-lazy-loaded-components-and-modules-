import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyHomeComponent } from './lazy-home/lazy-home.component';

const routes: Routes = [
  {
    path: '',
    component: LazyHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BRoutingModule { }
