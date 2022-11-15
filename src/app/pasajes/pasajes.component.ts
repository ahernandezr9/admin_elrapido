import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pasajes',
  templateUrl: './pasajes.component.html',
  styleUrls: ['./pasajes.component.css']
})
export class PasajesComponent implements OnInit {

  //tick = new Ticket()

  constructor() { }
  
  ngOnInit(): void {
   /* this.tick=JSON.parse(JSON.stringify(localStorage.getItem("pasaje")))
    console.log(this.tick)*/
  }

}
