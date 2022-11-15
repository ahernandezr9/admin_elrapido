import { Destiny } from "./Destiny";
import { Origin } from "./Origin";

export interface  ITicket {
        _id:String;
        cantPerson:number;
        price:number;
        importTotal:number;
        origin:Origin;
        destiny:Destiny;
        departureDate:String;
        returnDate:String;
        registrationDate:String;
        _idBus:String;
        personList:Array<any>;
}
