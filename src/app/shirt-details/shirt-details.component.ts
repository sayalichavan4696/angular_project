import { Component, OnInit } from '@angular/core';
import {ClothesService} from '../services/clothes.service'

@Component({
  selector: 'app-shirt-details',
  templateUrl: './shirt-details.component.html',
  styleUrls: ['./shirt-details.component.scss']
})
export class ShirtDetailsComponent implements OnInit {

  private shirtData :any =[]
  constructor(private _clothservice:ClothesService) { }

  ngOnInit() {
    this.getShirtData()
  }
  getShirtData(){
    this._clothservice.getShirtData().subscribe(response=>{

      this.shirtData =response;
    },
    error=>{
      console.log("error"+JSON.stringify(error))
    })
  }
}
