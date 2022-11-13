import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
