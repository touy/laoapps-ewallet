import {IPerson,Person} from './person';
export interface IUser{
    userName:string;
    password:string;
    phoneNumber:number;
    email:string;
}
export class User implements IUser{
    private person : IPerson = new Person();
    userName:string;
    password:string;
    phoneNumber:number;
    email:string;
    constructor(userName:string,password:string,phoneNumber:number,email:string){
        this.userName=userName;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
    setPerson(person:IPerson){
        this.person = person;
    }
    getPerson():IPerson{
        return this.person;
    }
}