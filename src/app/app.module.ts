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
import { SignupComponent } from './signup/signup.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
   
    DashboardComponent,
   
    SignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    CustomMaterialModule,

  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
