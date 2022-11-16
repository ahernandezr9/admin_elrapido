import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  getAllDestiny(){
    return this.http.get("http://localhost:8080/v1/BusSale/destinyList");
    
  }

  getAllOrigin(){
    return this.http.get("http://localhost:8080/v1/BusSale/originList");
  }

  getBusAvailable(idOrigin:any,idDestiny:any,status:any){
    return this.http.post("http://localhost:8080/v1/BusSale/busAvailable",{
      "idOrigin":idOrigin,
      "idDestiny":idDestiny,
      "status":status
    });
    
  }


}
