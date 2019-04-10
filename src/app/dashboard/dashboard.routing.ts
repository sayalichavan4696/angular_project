import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ClothesComponent } from '../clothes/clothes.component';

  const routes:Routes=[
  {
    path:'clothes',
    component:ClothesComponent
    
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
