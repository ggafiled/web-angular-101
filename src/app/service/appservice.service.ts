import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Data } from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  url:string = "https://nodejs-angular-101.herokuapp.com/workshop";
  selectedUser:Data = new Data;
  document:Data[];

  constructor(private http:HttpClient) { }
  get(){
    return this.http.get(this.url);
  }

  add(data:Data){
    return this.http.post(this.url,data);
  }

  update(data:Data){
    return this.http.put(this.url+"/"+data._id,data);
  }

  delete(data:Data){
    return this.http.delete(this.url+"/"+data._id);
  }
}
