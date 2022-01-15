import { Crud, IService } from "..";
export declare class Service implements IService {
    private crud;
    constructor(crud: Crud);
    sayHello(): string;
}
