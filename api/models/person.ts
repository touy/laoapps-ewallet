export interface IPerson{
    name:string;
    lastName:string;
    birthDate:string;
    gender:boolean;
}
export class Person implements IPerson{
    name:string;
    lastName:string;
    birthDate:string;
    gender:boolean; // true:male, false: female
    constructor(name:string='',lastName:string='',birthDate:string='',gender:boolean=false){
        this.birthDate=birthDate;
        this.gender = gender;
        this.lastName = lastName;
        this.name = name;
    }
}
// export var file_name:string='person.ts';