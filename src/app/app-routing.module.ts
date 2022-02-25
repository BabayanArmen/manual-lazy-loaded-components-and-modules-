import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'desktop',
    loadChildren: () => import('./modules/desktop/desktop.module').then(m => m.DesktopModule),
  },
  {
    path: 'mobile',
    loadChildren: () => import('./modules/mobile/mobile.module').then(m => m.MobileModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
