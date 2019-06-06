import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../service/appservice.service';
import { ActivatedRoute } from '@angular/router';
import { Data } from '../models/data';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  car_data:any = {
    _id:"",
    name:"",
    detail:"",
    url:"",
    count:null
  };

  constructor(private userservice:AppserviceService,private route:ActivatedRoute) { 
    this.route.params.subscribe((data)=>{
      console.log(data);
      if(data._id == undefined){
        this.car_data.name = "";
        this.car_data.detail = "";
        this.car_data.url = "";
        this.car_data.count = null;
      }else{
        this.car_data._id = data._id;
        this.car_data.name = data.name;
        this.car_data.detail = data.detail;
        this.car_data.url = data.url;
        this.car_data.count = data.count;
      }
      console.log(this.car_data);
    });
  }

  save(user){
    if(this.car_data._id == ""){
      this.userservice.add(user).subscribe((doc)=>{
        this.userservice.document = doc as Data[];
        alert('ขั้นตอนเพิ่มข้อมูลสำเร็จแล้ว');
      },(err)=>{
        alert('ขั้นตอนเพิ่มข้อมูลผิดพลาด');
      });
    }else{
      this.userservice.update(user).subscribe((doc)=>{
        alert('ทำการอัพเดตข้อมูลเรียบร้อยแล้ว');
      },(err)=>{
        alert('ไม่สามารถอัพเดตข้อมูลได้');
      });
    }
  }
  ngOnInit() {
  }

  clear(){
    this.car_data.name = "";
    this.car_data.detail = "";
    this.car_data.url = "";
    this.car_data.count = null;
  }

}
