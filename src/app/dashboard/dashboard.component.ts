import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private _router:Router,private _userService:UserService) { }

  ngOnInit() {
  }
 logout(){
  this._userService.isUserLoggedOut();
  this._router.navigate(['login'])
 }
}
