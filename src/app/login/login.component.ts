import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {MatDialog} from '@angular/material'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }
 private username:string
 private password:string
 //private signup:string
  ngOnInit() {
  }
 login()
 {
  if(this.username === 'admin' && this.password ==='admin'){
    this.router.navigate(['dashboard'])
  }
  else
  {
    
    alert("Invalid Credentials")
  }
 }
 signUp(){
  
      this.router.navigate(['signup'])
  
  alert("hii")
 }
 
}
