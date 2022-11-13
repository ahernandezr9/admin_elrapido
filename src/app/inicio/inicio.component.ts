import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  //Variable global
  destination: any[] = [];
  origins: any[] = [];

  constructor(private crudservice: CrudService) { }

  ngOnInit(): void {
    this.crudservice.getAllOrigin().subscribe((origin:any) =>{
      console.log("origin: ",origin);
      this.origins = origin;
    })

    this.crudservice.getAllDestiny().subscribe((destiny:any) =>{
      console.log("destiny: ",destiny);
      this.destination = destiny;
    })
  }

}
