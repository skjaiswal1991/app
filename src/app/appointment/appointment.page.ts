import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.page.html',
  styleUrls: ['./appointment.page.scss'],
})
export class AppointmentPage implements OnInit {

  constructor() { }

  appoint = [{name:"sanjay",date:"12-02-1991",doctor:"sanjay"},{name:"vijay",date:"10-02-1991",doctor:"sonu"}];


  ngOnInit() {
  }

  appointment =(data)=>{
    console.log(data);

  }

}
