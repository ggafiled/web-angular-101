import { Component, OnInit,Input } from '@angular/core';
import { AppserviceService } from '../service/appservice.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  check:any = "จองที่จอดรถ";
  check_:boolean = false;

  constructor(private appservice:AppserviceService) { }
  
  @Input('user') message:any;
  ngOnInit() {
  }

  booking(){
    if(this.check_){
      this.check = "ยกเลิก";
    }else{
      this.check = "จองที่จอดรถ";
    }
    this.check_= !this.check_;
  }

}
