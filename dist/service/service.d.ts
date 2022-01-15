import { Crud, IService } from "..";
export default class Service implements IService {
    private crud;
    constructor(crud: Crud);
    sayHello(): string;
}
