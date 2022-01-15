import { Crud, TYPES } from "..";
import { inject } from "inversify";

export class Service {
    constructor(@inject(TYPES.Empleado) private crud:Crud ){

    }
    sayHello(){
        return this.crud.getId();
    }
}