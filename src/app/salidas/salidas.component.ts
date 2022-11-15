import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Bus } from '../model/Bus';
import { Destiny } from '../model/Destiny';
import { ITicket } from '../model/ITicket';
import { Origin } from '../model/Origin';
import { Seat } from '../model/Seat';
import { Ticket } from '../model/Ticket';

@Component({
  selector: 'app-salidas',
  templateUrl: './salidas.component.html',
  styleUrls: ['./salidas.component.css']
})
export class SalidasComponent implements OnInit {

  tick:Ticket = new Ticket()
  origin = new Origin();
  destiny = new Destiny();
  bus:Bus = new Bus()
  btnColor1="btn-success"
  btnColor2="btn-secondary"
  pisoSelect=0
  coutSelect:string[]=[]
  countAsientoLibre=0
  seatList= Array<Seat>()
  constructor(private crudservice: CrudService) { }
  
  ngOnInit(): void {
    var json = JSON.parse(JSON.stringify(localStorage.getItem("pasaje"))) as Ticket
    console.log(json.origin)
    this.origin=(json.origin == undefined)?new Origin():json.origin 
    this.destiny=(json.destiny == undefined)?new Destiny():json.destiny 
 /*this.tick.departureDate=(json.departureDate == undefined)?"":json.departureDate
    this.tick.returnDate=(json.returnDate == undefined)?"":json.returnDate
    this.tick.origin*/
    this.finByBusAvailable("63706dc2d5d088b15aa24358","63706c88d5d088b15aa24344","0")
  }
 
  finByBusAvailable(idOrigin:any,idDestiny:any,status:any){
    this.crudservice.getBusAvailable(idOrigin,idDestiny,status).subscribe(x=>{
      this.bus=x as Bus;
    //  console.log(this.bus)  
      this.seatList=this.bus.listFlat[0].seatList
      this.asientoLibre()
    })
  }
  convertInt(number:string){return parseInt(number)}
  
  pisoBus(index:any){
    this.pisoSelect=index
    switch (index) {
      case 0:
         this.btnColor1 ="btn-success";
         this.btnColor2 = "btn-secondary";break;
      case 1:
         this.btnColor1 = "btn-secondary";
         this.btnColor2 = "btn-success";break;
  
    }
    
    this.seatList=this.bus.listFlat[index].seatList
  }
  selectAsiento(number:any){
  for(var i=0;i<this.seatList.length;i++){
    var value = this.seatList[i]
      if(value.number == number){
        if(value.status!="1" && value.status !="2"){
        if(value.status == "3"){
          value.status="0"
          this.coutSelect=   this.coutSelect.filter((item) => item !==value.number)
        }else{
          if(this.coutSelect.length<4){
             value.status="3"
             this.coutSelect.push(value.number);
          }
        }
        this.seatList[i] = value
        console.log(value)
        break;
      }
       }
  }
  }
 asientoLibre(){
    for(var i=0;i<this.bus.listFlat.length;i++){
      for(var j=0;j<this.bus.listFlat[i].seatList.length;j++){
         if(this.bus.listFlat[i].seatList[j].status=="0"){
          this.countAsientoLibre++;
         }
      }
    }
    }

}
