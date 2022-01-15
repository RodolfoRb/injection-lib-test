import { Crud, IService } from "..";
import { inject } from "inversify";
import TYPES from "../types";

export default class Service implements IService {
    constructor(@inject(TYPES.Empleado) private crud: Crud) {

    }
    sayHello(): string {
        return this.crud.getId().toString();
    }
}