import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuardService } from './services/auth-guard.service'
import { ClothesComponent } from './clothes/clothes.component';
import { ShoesComponent } from './shoes/shoes.component';
import { BagsComponent } from './bags/bags.component';
import { TshirtDetailsComponent } from './tshirt-details/tshirt-details.component';
import { ShirtDetailsComponent } from './shirt-details/shirt-details.component';
import { JeansDetailsComponent } from './jeans-details/jeans-details.component'
const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'clothes',
        component: ClothesComponent,
        children: [
        {
          path: 't_shirts',
          component: TshirtDetailsComponent
        },
        { path: 'jeans', 
        component: JeansDetailsComponent 
       },
        { path: 'shirts', 
        component: ShirtDetailsComponent 
       },
       { path: '**', 
        redirectTo:'t_shirts' 
       }

        ]

      },
      { path: 'shoes', component: ShoesComponent },
      { path: 'bags', component: BagsComponent },
      { path: '**', redirectTo: 'clothes', pathMatch: 'full' }
    ]
  },
  {
    path: 'signup',
    component: SignupComponent,
    // canActivate:[AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
