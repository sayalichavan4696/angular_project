import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
// import { CustomMaterialModule } from './core/material.module';
import { CustomMaterialModule} from './core/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FormsModule} from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import {ClothesComponent} from './clothes/clothes.component';
import { ShoesComponent } from './shoes/shoes.component';
import { BagsComponent } from './bags/bags.component'
import {FlexLayoutModule} from '@angular/flex-layout';
import { TshirtDetailsComponent } from './tshirt-details/tshirt-details.component';
import { ShirtDetailsComponent } from './shirt-details/shirt-details.component';
import { JeansDetailsComponent } from './jeans-details/jeans-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
   
    DashboardComponent,
   
    SignupComponent,

    ClothesComponent,

    ShoesComponent,
    
    BagsComponent,
    
    TshirtDetailsComponent,
    
    ShirtDetailsComponent,
    
    JeansDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    CustomMaterialModule,
    FlexLayoutModule,

  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
