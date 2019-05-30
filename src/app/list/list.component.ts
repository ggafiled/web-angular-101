import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../service/appservice.service';
import { Data } from '../models/data';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  check:any = "จองที่จอดรถ";
  check_:boolean = false;
  constructor(private appservice:AppserviceService) { }

  ngOnInit() {
    this.getdataTomodels();
  }

  getdataTomodels(){
    this.appservice.get().subscribe(doc=>{
      this.appservice.document = doc as Data[];
    });
  }

  delete(id){
    this.appservice.delete(id).subscribe((doc)=>{
      alert('ลบข้อมูลเรียบร้อยแล้ว');
      this.getdataTomodels();
    });
  }

  booking(){
    if(this.check_ == true){
      this.check = "ยกเลิก";
      this.check_ = false;
    }else{
      this.check = "จองที่จอดรถ";
      this.check_ = true;
    }
  }

}
