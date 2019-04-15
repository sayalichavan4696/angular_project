import { Component, OnInit } from '@angular/core';
import { ClothesService} from '../services/clothes.service';
import { Jeans} from './jeans'
@Component({
  selector: 'app-jeans-details',
  templateUrl: './jeans-details.component.html',
  styleUrls: ['./jeans-details.component.scss']
})
export class JeansDetailsComponent implements OnInit {

  private jeansdata:Jeans =[]
  constructor(private _clotheservice:ClothesService) { }

  ngOnInit() {
    this.getJeansData();
  }
  getJeansData(){
    this._clotheservice.getJeansData().subscribe((res :Jeans)=>{
      console.log("Jeans details=>"+JSON.stringify(res))
      this.jeansdata = res
    },
    error=>{
      console.log("Error"+JSON.stringify(error))
    })
  }

}
