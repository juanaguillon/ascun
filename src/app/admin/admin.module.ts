import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';


/* Componenetes */
import { AdminLeftScreenComponent } from './adminleftscreen/adminleftscreen.component';
import { AdminComponent } from './admin.component';

export const adminRoutes:Routes = [
  {
    path: 'admin',
    component:AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'left',
        pathMatch: "full"
      },
      {
        path: 'left',
        component: AdminLeftScreenComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    AdminComponent,
    AdminLeftScreenComponent
  ],
  imports: [ 
    CommonModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    
   ],
  exports: [],
  providers: [],
})
export class AdminModule {}