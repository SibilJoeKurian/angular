import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  @Input('name')
  messageName:String;
  passedName:String;
  dateMessage:String;
  address:any;
  constructor() { 
    setInterval(()=>{
      let currentDate =new Date();
      this.dateMessage=currentDate.toDateString()+" "+ currentDate.toLocaleTimeString();
      
    },1000)
    this.address={
      name:"Sibil",
     
    };
  }
  getPhoneNumber(){
    this.address={phone:[1,2,3]} ;
    return this.address.phone;
  }
  ngOnInit(): void {
   this.passedName= this.messageName;
  }

}
