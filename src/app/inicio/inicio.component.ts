import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';
import { Person } from '../model/Person';
import { Ticket } from '../model/Ticket';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  //Variable global
  destination: any[] = [];
  origins: any[] = [];
   tick = new Ticket();
  constructor(private crudservice: CrudService,private router: Router) { }

  ngOnInit(): void {
    this.crudservice.getAllOrigin().subscribe((origin:any) =>{
    //  console.log("origin: ",origin);
      this.origins = origin;
    })

    this.crudservice.getAllDestiny().subscribe((destiny:any) =>{
      //  console.log("origin: ",origin);
        this.destination = destiny;
      })
  }
  openlistOrigin(id:any){
    if(id== "-1") {this.destination=[];return} 
    this.origins.forEach(value =>{
      if(value._id == id){
       console.log("destiny: ",value.listDestiny);
        this.destination = value.listDestiny;
        this.tick.origin = value
       }
  })
}

  selectDestiny(id:any){
    this.tick.origin.listDestiny.forEach(value =>{
      if(value._id == id){
        this.tick.destiny = value
       }
  })
    
  }

  comprar(){
    this.tick.origin.listDestiny=[]
     localStorage.removeItem("pasaje")
     localStorage.setItem('pasaje', JSON.stringify(this.tick));
     this.router.navigateByUrl("/salidas");

  }

}
