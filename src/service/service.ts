import { Crud, IService, TYPES } from "..";
import { inject } from "inversify";

export class Service implements IService {
    constructor(@inject(TYPES.Empleado) private crud: Crud) {

    }
    sayHello(): string {
        return this.crud.getId().toString();
    }
}