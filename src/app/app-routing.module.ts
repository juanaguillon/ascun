import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeftScreenComponent } from './leftscreen/leftscreen.component';
import { adminRoutes } from './admin/admin.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/leftscreen',
    pathMatch: 'full'
  },
  {
    path:'leftscreen',
    component: LeftScreenComponent
  }
  
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes),
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
