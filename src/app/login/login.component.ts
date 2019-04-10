import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {MatDialog} from '@angular/material'
import {UserService} from '../services/user.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private _userService:UserService) { }
 private username:string ='admin'
 private password:string ='admin'
 //private signup:string
  ngOnInit() {
  }
//  login()
//  {
//   if(this.username === 'admin' && this.password ==='admin'){
//     this.router.navigate(['dashboard'])
//   }
//   else
//   {
    
//     alert("Invalid Credentials")
//   }
 //}
 login(){
   if(this._userService.authUser(this.username,this.password)){
    this.router.navigate(['dashboard'])

   }
   else{
     alert("Invalid Credentials")
   }
 }
 signUp(){
  
      this.router.navigate(['signup'])
 }
 
}
