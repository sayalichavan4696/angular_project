import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ClothesService {
  private url = "http://localhost:3000"
  constructor(private http:HttpClient) { }
//get tshirt details
getTshirtData(){
  return this.http.get(this.url+'/t_shirts') 
}
getJeansData(){
  return this.http.get(this.url+'/jeans')
}
getShirtData(){
  return this.http.get(this.url+'/shirts')
}

}
