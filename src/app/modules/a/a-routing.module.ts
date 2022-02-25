import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyAHomeComponent } from './lazy-ahome/lazy-ahome.component';

const routes: Routes = [
  {
    path: '',
    component: LazyAHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ARoutingModule { }
