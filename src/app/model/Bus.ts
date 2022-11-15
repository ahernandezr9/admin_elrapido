import { Flat } from "./Flat";

export class Bus {

        _id: string;
        name: string;
        description: string;
        idOrigin: string;
        idDestiny: string;
        listFlat: Array<Flat>;
        status: string;
}
