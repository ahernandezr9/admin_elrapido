import { Destiny } from "./Destiny";
import { Origin } from "./Origin";

export  class Ticket {
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


        static fromJSON(d: Object): Ticket {
                return Object.assign(new Ticket(), d);
            }
}
