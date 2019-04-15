import { Component, OnInit } from '@angular/core';
import {ClothesService} from '../services/clothes.service'
@Component({
  selector: 'app-tshirt-details',
  templateUrl: './tshirt-details.component.html',
  styleUrls: ['./tshirt-details.component.scss']
})
export class TshirtDetailsComponent implements OnInit {

  constructor(private _clothesService:ClothesService) { }
  private tshirtdata :any=[]
  ngOnInit() {
    this.getTshirtdata();
  }
  
  getTshirtdata(){
     this._clothesService.getTshirtData().subscribe(res=>{
      this.tshirtdata =res
      console.log("Result=>"+JSON.stringify(this.tshirtdata))
    },
    err=>{
      console.log("Error=>"+JSON.stringify(err))
    })  
  }
}
